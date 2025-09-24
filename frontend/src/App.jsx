
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import Innovataxi from "./pages/Innovataxi"
import Outstation from "./pages/Outstation"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {

  return (
    <div className="bg-gray-200 min-h-screen">
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/innovataxi" element={<Innovataxi />} />
          <Route path="/outstation" element={<Outstation />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App