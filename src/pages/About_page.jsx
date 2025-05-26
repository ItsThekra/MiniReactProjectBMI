import React from 'react';
import "../App"

function About_page() {
  return (
    <>
    <div className="max-w-2xl mx-auto mt-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">About This App</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        This BMI Calculator app helps users calculate their Body Mass Index based on their height and weight. 
        It's designed to give users a quick insight into their health status—whether underweight, normal, overweight, or obese.
        <br /><br />
        The app is built using <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span> with a simple and user-friendly interface.
      </p>
    </div>
    </>
  );
}

export default About_page;
