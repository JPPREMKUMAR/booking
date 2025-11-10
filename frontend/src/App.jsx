
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
import MyProfile from "./pages/MyProfile"
import Thankyou from './pages/Thankyou'
import Footer from './components/Footer'
import HelmetSeo from "./components/HelmetSeo"
import ContactWithUs from "./components/ContactWithUs"
const App = () => {

  return (
    <div className=" min-h-screen ">
      <MainContextProvider>
        <>
          <HelmetSeo />
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
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="/thankyou/:bookingId" element={<Thankyou />} />

          </Routes>

        </>
      </MainContextProvider>
    </div>
  )
}



export default App