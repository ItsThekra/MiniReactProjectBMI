import "../App"
import React from 'react'
import { Link } from 'react-router';


function Home_page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/053/444/798/small_2x/comprehensive-body-mass-index-bmi-meter-illustration-displaying-weight-categories-from-low-to-high-png.png" alt="" className="h-20" />
      <h1 className="text-4xl font-bold mb-6">Welcome to BMI Website</h1>

      <Link to="/signup">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 text-lg cursor-pointer">
        Join us to calculate your BMI
        </button>
      </Link>
    </div>
  );
}

export default Home_page;



