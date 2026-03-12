import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { CalculationResult } from "./calculator-logic";

export const generatePDF = (
  power: number,
  length: number,
  results: CalculationResult,
) => {
  const doc = new jsPDF();
  const date = new Date().toLocaleString();

  // Nagłówek
  doc.setFont("arial");
  doc.setFontSize(18);
  doc.text("Raport Doboru Przekroju Kabla", 14, 22);

  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(`Data wygenerowania: ${date}`, 14, 30);

  // Tabela z danymi wejściowymi i wynikami
  autoTable(doc, {
    startY: 40,
    head: [["Parametr", "Wartość"]],
    body: [
      ["Moc odbiornika", `${power} kW`],
      ["Dlugosc linii", `${length} m`],
      ["Napiecie znamionowe", "400 V"],
      ["Prad obliczeniowy Ib", `${results.current} A`],
      ["Sugerowane zabezpieczenie", `${results.breaker}`],
      ["Spadek napiecia", `${results.drop} %`],
      ["Zalecany przekroj kabla", `${results.cable} mm2 Cu`],
    ],
    theme: "striped",
    headStyles: { fillColor: [30, 41, 59] }, // Slate-800
  });

  // Stopka z werdyktem
  const finalY = (doc as any).lastAutoTable.finalY + 10;
  doc.setFontSize(12);
  doc.setTextColor(...(results.isSafe ? [22, 101, 52] : [185, 28, 28]));
  doc.text(
    results.isSafe
      ? "STATUS: Dobor poprawny - spelnia norme spadku napiecia < 3%."
      : "STATUS: UWAGA! Przekroczono dopuszczalny spadek napiecia.",
    14,
    finalY,
  );

  // Pobieranie pliku
  doc.save(`Raport_Kabel_${power}kW_${length}m.pdf`);
};
