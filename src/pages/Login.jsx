import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const handleInputChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  // navigate using useNavigate Hook
  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = input;
    if (username === "admin" && password === "admin") {
      navigate("/");
    }
  };

  return (
    <form className=" flex flex-col h-1/2 py-4 px-8 justify-around rounded-lg bg-slate-300">
      <div className="flex flex-col gap-1">
        <label
          className=" mb-2 text-sm font-medium text-gray-600"
          htmlFor="user"
        >
          UserName
        </label>
        <input
          className=" px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          id="user"
          placeholder="username"
          name="username"
          onChange={handleInputChange}
        />
        <label
          className=" mb-2 text-sm font-medium text-gray-600"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className=" px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          id="password"
          placeholder="password"
          name="password"
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={handleLogin}
        className="px-4 py-2 text-white bg-blue-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
