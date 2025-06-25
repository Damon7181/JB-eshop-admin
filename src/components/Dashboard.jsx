import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";

// function Dashboard({ children }) {
function Dashboard() {
  return (
    <div className="flex h-screen ">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-4 bg-blue-50 ">
          {/* {children} */}
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
