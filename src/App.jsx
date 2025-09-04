import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CoursePage from './Pages/CoursePage'
import CourseDetails from './Components/AllCourses/CourseDetails'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Products from './Pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course-page" element={<CoursePage/>}/>
      <Route path="/all-courses" element={<CourseDetails/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App
