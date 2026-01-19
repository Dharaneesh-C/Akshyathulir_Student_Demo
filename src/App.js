

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./pages/Sidebar";
import Header from "./pages/Header";
import Course from "./pages/Courses";
import Trainer from "./pages/Trainers";
import Industry from "./pages/Industry";
import Certification from "./pages/Certificates";
import Placement from "./pages/Placements";
import Allform from "./pages/Allform";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* SIDEBAR – ALWAYS VISIBLE */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main style={{ flexGrow: 1, padding: 24, backgroundColor: "#f5f7f5" }}>
          


          {/* PAGE ROUTING */}
          <Routes>
            <Route path="/"element={<Header/>} />
            <Route path="/Allform" element={<Allform />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/trainers" element={<Trainer />} />
            <Route path="/placements" element={<Placement />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/certificates" element={<Certification />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
