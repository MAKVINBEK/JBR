import { Input } from "@mui/material";
import { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [som, setSom] = useState(0);
  const [usd, setUsd] = useState(0);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    async function fetchExchangeRate() {
      try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/KGS");
        const data = await response.json();
        setRate(data.rates.USD); 
      } catch (error) {
        console.error("Ошибка при получении курса обмена:", error);
      }
    }
    fetchExchangeRate();
  }, []);

  useEffect(() => {
    if (rate > 0) {
      setUsd((som * rate).toFixed(2)); // Правильный расчет
    }
  }, [som, rate]);

  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow rounded-lg">
      <label className="block text-gray-700">Сумма в сомах (KGS):</label>
      <Input
        type="number" 
        value={som} 
        onChange={(e) => setSom(parseFloat(e.target.value))} 
        className="mt-2 w-full" 
      />
      <p className="mt-3 text-gray-900">≈ {usd} USD</p>
    </div>
  );
}
