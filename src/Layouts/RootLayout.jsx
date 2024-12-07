import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
function RootLayout() {
  return (
    <div className="bg-gray-900 h-screen flex justify-between flex-col">
      <NavBar />
      <main className="flex justify-center items-center text-center text-white text-8xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
