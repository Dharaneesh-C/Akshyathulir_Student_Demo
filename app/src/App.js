import React from "react";
import { Routes, Route } from "react-router-dom";

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
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Header />} />
        <Route path="allform" element={<Allform />} />
        <Route path="courses" element={<Course />} />
        <Route path="trainers" element={<Trainer />} />
        <Route path="placements" element={<Placement />} />
        <Route path="industry" element={<Industry />} />
        <Route path="certificates" element={<Certification />} />
      </Route>
    </Routes>
  );
}

export default App;   // ← 🔥 THIS LINE FIXES THE ERROR
