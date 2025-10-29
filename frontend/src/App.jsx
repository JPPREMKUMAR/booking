
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainContextProvider } from './context/MainContext'
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
      <MainContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route exact path="/booking" element={<Booking />} />
            <Route path="/innovaStation" element={<Innovataxi />} />
            <Route path="/outStation" element={<Outstation />} />

            <Route path="/services" element={<Services />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </MainContextProvider>
    </div>
  )
}



export default App