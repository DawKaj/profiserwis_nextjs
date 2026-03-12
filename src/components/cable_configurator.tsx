import { useState, useMemo } from "react";

export const CableCalculator = () => {
  const [length, setLength] = useState(30);
  const [voltage, setVoltage] = useState(400);
  const [cosfi, setCosfi] = useState(0.85);


  const results = useMemo(
    () => calculateInstallation(power, length, voltage, cosfi),
    [power, length, voltage, cosfi],
  );

  return (

  );
}