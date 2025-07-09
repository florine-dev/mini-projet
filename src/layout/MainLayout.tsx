import React from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow flex flex-col ">
        <NavBar />
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
