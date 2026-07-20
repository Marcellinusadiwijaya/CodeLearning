import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./CSS/index.css";

// Pages
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import PythonCourse from "./pages/PythonCourse";
// import CourseMenu from "./pages/CourseMenu";
import AllCourseMenu from "./pages/AllCourseMenu";
import ResetPassword from "./ResetPassword";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* AUTH */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* MAIN APP */}
        <Route path="/app" element={<App />} />
        {/* MAIN COURSE SYSTEM */}
        {/* <Route path="/course-menu" element={<CourseMenu />} /> */}
        <Route path="/course/:courseId" element={<AllCourseMenu />} />


        {/* COURSE CONTENT */}
        <Route path="/python-course/:sectionIndex/:itemIndex" element={<PythonCourse />} />
      </Routes>
    </Router>
  </StrictMode>
);
