import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Placements from "./pages/Placements";
import Trainers from "./pages/Trainers";
import Certificates from "./pages/Certificates";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>

        <Route index element={<Dashboard />} />

        <Route path="courses" element={<Courses />} />

        <Route path="placements" element={<Placements />} />

        <Route path="trainers" element={<Trainers />} />

        <Route path="certificates" element={<Certificates />} />

        <Route path="allform" element={<Profile />} />

      </Route>
    </Routes>
  );
}

export default App;