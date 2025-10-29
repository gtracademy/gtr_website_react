import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./Components/Layout/MainLayout";

// import MentorsPage from "./Components/dropdown_pages/MentorSection";

// Lazy load pages
const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Components/about_us/AboutUs"));
const CoursePage = lazy(() => import("./Pages/CoursePage"));
const CourseDetails = lazy(() => import("./Components/AllCourses/CourseDetails"));

// Dropdown Pages
const MentorsPage = lazy(() => import("./Components/dropdown_pages/MentorSection"));
const BlogPage = lazy(() => import("./Components/dropdown_pages/Blog"));
const CareerPage = lazy(() => import("./Components/dropdown_pages/Career"));
const CorporatePage = lazy(() => import("./Components/dropdown_pages/CorporateTraining"));
const EducationPage = lazy(() => import("./Components/dropdown_pages/EducationInstitute"));
const HiringPage = lazy(() => import("./Components/dropdown_pages/HireFromUs"));

// const LifeAtGtrpages = lazy(() => import("./Components/dropdown_pages/LifeAtGtrpages"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/all-courses" element={<CourseDetails />} />
          <Route path="/course/:slug" element={<CoursePage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/corporate-training" element={<CorporatePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/hire" element={<HiringPage />} />
          
          {/* <Route path="/life-at-gtr" element={<LifeAtGtrpages />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
