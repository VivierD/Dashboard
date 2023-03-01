import React from "react";
import "./App.css";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance"
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees"
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashboardcontextProvider from "./context/DashboardContext";

export default function App() {
  return (
    <DashboardcontextProvider>    
      <Sidebar/>
      <Routes>
        <Route path="/" element={<DashboardFinance/>} />
        <Route path="/dashboardEmployees" element={<DashboardEmployees/>} />
      </Routes>
    </DashboardcontextProvider>
  );
}
