import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import CoursePage from "./Pages/CoursePage";
import CourseDetails from "./Components/AllCourses/CourseDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-courses" element={<CourseDetails />} />
        
        {/* Dynamic course route */}
        <Route path="/course/:slug" element={<CoursePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
