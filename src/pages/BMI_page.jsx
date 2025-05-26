import React, { useState } from 'react';

function BMI_page() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (height === 0) return;
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue < 25) setStatus("Normal");
    else if (bmiValue < 30) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h2>
      <div className="space-y-4">
        <input type="number" placeholder="Weight (kg)" className="w-full border px-3 py-2" onChange={(e) => setWeight(e.target.value)} />
        <input type="number" placeholder="Height (cm)" className="w-full border px-3 py-2" onChange={(e) => setHeight(e.target.value)} />
        <button onClick={calculateBMI} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Calculate</button>
        {bmi && (
          <div className="text-center mt-4">
            <p className="text-xl">Your BMI is: {bmi}</p>
            <p className="text-lg text-gray-600">Status: {status}</p>
            <img
              src={`/images/${status.toLowerCase()}.png`}
              alt={status}
              className="mx-auto w-40 h-40 mt-4"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BMI_page;
