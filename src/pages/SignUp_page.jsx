import "../App"
import React from 'react'
import { useState } from "react"
import BMI_page from "./BMI_page";


function SignUp_page() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const Errors = {};

    if (form.fullName.length < 3 || form.fullName.length > 25)
      Errors.fullName = "Name must be 3-25 characters.";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      Errors.email = "Invalid email format.";

    if (form.password.length < 8)
      Errors.password = "Password must be at least 8 characters.";

    if (form.password !== form.confirmPassword)
      Errors.confirmPassword = "Passwords do not match.";

    return Errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("user", JSON.stringify(form));
      alert("Account created successfully!");
      window.location.href = "/bmi";
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl my-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={handleChange}
          />
          {error.fullName && (
            <p className="text-red-500 text-sm">{error.fullName}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={handleChange}
          />
          {error.email && (
            <p className="text-red-500 text-sm">{error.email}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={handleChange}
          />
          {error.password && (
            <p className="text-red-500 text-sm">{error.password}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full border border-gray-300 rounded px-3 py-2"
            onChange={handleChange}
          />
          {error.confirmPassword && (
            <p className="text-red-500 text-sm">{error.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default SignUp_page;
