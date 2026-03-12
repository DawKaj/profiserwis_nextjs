import electricalData from "../data/electrical-data.json";

export interface CalculationResult {
  current: string;
  breaker: number;
  cable: number;
  drop: string;
  isSafe: boolean;
}

export const calculateInstallation = (
  powerKw: number,
  lengthM: number,
  voltage: number,
  cosFi: number,
): CalculationResult => {
  const { constants, cableTable, breakers } = electricalData;

  // Przeliczenia jednostek i stałe
  const P = powerKw * 1000; // W
  const U = voltage; // V (np. 400 dla 3-faz)
  const gamma = constants.gammaCu; // m/(Ω*mm²)
  const maxDropPercent = constants.maxVoltageDropPercent;
  const cosPhi = cosFi;

  // 1. Obliczanie prądu roboczego Ib: I = P / (√3 * U * cosφ)
  const currentIb = P / (Math.sqrt(3) * U * cosPhi);

  // 2. Dobór prądu znamionowego wyłącznika In: In >= Ib
  // Szukamy najmniejszego dostępnego bezpiecznika, który jest większy lub równy prądowi roboczemu
  const suggestedBreaker =
    breakers.find((b) => b >= currentIb) || breakers[breakers.length - 1];

  // 3. Funkcja pomocnicza do obliczania spadku napięcia ΔU%
  // Wzór dla układu trójfazowego: ΔU% = (100 * P * L) / (γ * S * U²)
  const calculateDrop = (s: number) =>
    (100 * P * lengthM) / (gamma * s * Math.pow(U, 2));

  // 4. Dobór kabla (Iteracja po tabeli kabli)
  // Szukamy pierwszego przekroju, który spełnia oba warunki jednocześnie:
  // a) Iz >= In (Obciążalność kabla jest większa niż prąd bezpiecznika)
  // b) ΔU% <= maxDrop (Spadek napięcia mieści się w normie)
  const selectedCable = cableTable.find((cable) => {
    const isCapacityOk = cable.iz >= suggestedBreaker;
    const isDropOk = calculateDrop(cable.s) <= maxDropPercent;
    return isCapacityOk && isDropOk;
  });

  // Jeśli nie znaleziono kabla spełniającego oba warunki, bierzemy największy z tabeli
  const finalCable = selectedCable || cableTable[cableTable.length - 1];
  const finalDrop = calculateDrop(finalCable.s);

  // Sprawdzenie, czy ostateczny wybór jest faktycznie bezpieczny (na wypadek, gdyby nawet największy kabel zawiódł)
  const isSafe =
    finalDrop <= maxDropPercent && finalCable.iz >= suggestedBreaker;

  return {
    current: currentIb.toFixed(2),
    breaker: suggestedBreaker,
    cable: finalCable.s,
    drop: finalDrop.toFixed(2),
    isSafe: isSafe,
  };
};
