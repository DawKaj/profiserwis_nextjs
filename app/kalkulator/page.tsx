"use client";

import { useState, useMemo } from "react";
import { calculateInstallation } from "@/components/calculator-logic";
import { Zap, Ruler, CheckCircle, AlertTriangle, FileDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function KalkulatorPage() {
  const [power, setPower] = useState(15);
  const [length, setLength] = useState(30);
  const [voltage, setVoltage] = useState(400);
  const [cosfi, setCosfi] = useState(0.85);

  const results = useMemo(
    () => calculateInstallation(power, length, voltage, cosfi),
    [power, length, voltage, cosfi],
  );

  return (
    <div className="w-full gap-8 ">
      <Card className="max-w-2xl mx-auto shadow-2xl border-none mt-6 py-0">
        <CardHeader className="bg-slate-900 text-white rounded-t-xl">
          <CardTitle className="flex items-center gap-4 text-lg uppercase tracking-widest">
            <Zap className="text-yellow-400" /> Kalkulator Przekroju Kabla
          </CardTitle>
        </CardHeader>

        <CardContent className="p-8 space-y-12">
          {/* Suwaki */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <Label className="text-sm font-bold text-slate-500 uppercase flex items-center gap-2">
                    Napięcie instalacji
                  </Label>
                  <RadioGroup
                    className="flex flex-row space-x-4"
                    defaultValue="400"
                    value={voltage}
                    onValueChange={(val) => setVoltage(val)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="h1" value="380" />
                      <Label htmlFor="h1">380V</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="h2" value="400" />
                      <Label htmlFor="h2">400V</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem id="h3" value="440" />
                      <Label htmlFor="h3">440V</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-sm font-bold text-slate-500 flex items-center gap-2">
                  cosFi
                </Label>
                <Input
                  type="number"
                  value={cosfi}
                  min={0.1}
                  max={1}
                  step={0.05}
                  onChange={(e) => setCosfi(parseFloat(e.target.value) || 0.85)}
                  className="w-25 text-center font-black bg-slate-100 text-slate-800  border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <Slider
                value={[cosfi]}
                onValueChange={(v) => setCosfi(v[0])}
                min={0.1}
                max={1}
                step={0.05}
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-sm font-bold text-slate-500 uppercase flex items-center gap-2">
                  <Zap size={16} /> Moc (kW)
                </Label>
                <Input
                  type="number"
                  value={power}
                  min={1}
                  max={130}
                  step={0.5}
                  onChange={(e) => setPower(parseFloat(e.target.value) || 1)}
                  className="w-25 text-center font-black bg-slate-100 text-slate-800  border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <Slider
                value={[power]}
                onValueChange={(v) => setPower(v[0])}
                min={1}
                max={130}
                step={0.5}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-bold text-slate-500 uppercase flex items-center gap-2">
                  <Ruler size={16} /> Długość (m)
                </label>
                <Input
                  type="number"
                  value={length}
                  min={3}
                  max={150}
                  onChange={(e) => setLength(parseFloat(e.target.value) || 3)}
                  className="w-25 text-center font-black bg-slate-100 text-slate-800  border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <Slider
                value={[length]}
                onValueChange={(v) => setLength(v[0])}
                min={3}
                max={150}
                step={1}
              />
            </div>
          </div>

          {/* Wyniki Obliczeń */}
          <div className="grid grid-cols-3 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase">
                Prąd Ib
              </p>
              <p className="text-xl font-bold">{results.current} A</p>
            </div>
            <div className="text-center border-x border-slate-200">
              <p className="text-[10px] font-bold text-slate-400 uppercase">
                Zabezpieczenie n/p
              </p>
              <p className="text-xl font-bold text-blue-600">
                {results.breaker}A
              </p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase">
                Spadek U
              </p>
              <p
                className={`text-xl font-bold ${results.isSafe ? "text-slate-800" : "text-red-600"}`}
              >
                {results.drop}%
              </p>
            </div>
          </div>

          {/* Rekomendacja Finałowa */}
          <div
            className={`p-8 rounded-2xl flex items-center justify-between shadow-inner transition-all ${
              results.isSafe
                ? "bg-emerald-50 text-emerald-900 border-2 border-emerald-100"
                : "bg-red-50 text-red-900 border-2 border-red-100"
            }`}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1">
                Zalecany Przekrój (Miedź)
              </p>
              <p className="text-5xl font-black">{results.cable} mm²</p>
            </div>
            {results.isSafe ? (
              <CheckCircle size={48} className="text-emerald-500" />
            ) : (
              <AlertTriangle
                size={48}
                className="text-red-500 animate-bounce"
              />
            )}
          </div>
          <button
            onClick={() => generatePDF(power, length, results)}
            className="w-full mt-4 flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors font-bold uppercase tracking-wider text-sm"
          >
            <FileDown size={18} />
            Pobierz raport PDF
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
