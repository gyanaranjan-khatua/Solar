import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Topnavbar from "./Navbar/Topnavbar"
import About from "./Pages/About"
import BlogPost from "./Pages/BlogPost"
import Blogs from "./Pages/Blogs"
import Contact from "./Pages/Contact"
import Faq from "./Pages/Faq"
import Home from "./Pages/Home"
import Footer from "./Navbar/Footer"


function App() {
  

  return (
    <>
    <Topnavbar/>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blog" element={<Blogs/>} />
      <Route path="/blog/:id" element={<BlogPost/>} />
      <Route path="/faq" element={<Faq/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
