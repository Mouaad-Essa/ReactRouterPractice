import React from "react";
import { Outlet } from "react-router";

function LoginLayout() {
  return (
    <div className="bg-gray-900 h-screen flex  items-center justify-center flex-col">
      <p className="text-3xl py-3 text-white uppercase font-bold">Login Page</p>
      <Outlet />
    </div>
  );
}

export default LoginLayout;
