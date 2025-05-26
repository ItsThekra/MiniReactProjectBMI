import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';

function Navbar_component() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.fullName) {
      setUserName(user.fullName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserName("");
    navigate("/Login_page");
  };

  return (
    <nav className="flex justify-between items-center h-16 px-6 w-full border-b border-amber-50 z-40 bg-black text-white">
      
      {/* Left Side */}
      <div className="flex items-center gap-10">
        <img src="/images/bmi.png" alt="Logo" className="w-12 h-12" />
        <Link to="/" className="hover:text-amber-300">Home</Link>
        <Link to ="/About_page" className="hover:text-amber-300">About</Link> 
      </div>

      {/* Right Side */}
      <div className="flex gap-4 items-center">
        {userName ? (
          <>
            <span className="text-white font-semibold">Hello, {userName.split(" ")[0]}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full cursor-pointer "
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/Login_page" className="hover:text-amber-300">Login</Link>
            <Link to="/Signup_page">
              <button className="bg-[#1345a276] rounded-full py-1.5 px-6 border border-blue-800 hover:bg-blue-800">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar_component;
