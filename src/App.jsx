import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import CoursePage from "./Pages/CoursePage";
import CourseDetails from "./Components/AllCourses/CourseDetails";
import AboutUs from "./Components/about_us/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-courses" element={<CourseDetails />} />

        {/* ✅ About Us Page Route */}
        
        <Route path="/about" element={<AboutUs />} />

        {/* Dynamic course route */}
        <Route path="/course/:slug" element={<CoursePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
