import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App"

function Login_page() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.email !== form.email || user.password !== form.password) {
      setError("Invalid email or password.");
    } else {
      alert("Login successful!");
      navigate("/bmi"); // ✅ توجيه بعد تسجيل الدخول
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border px-3 py-2"
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login_page;
