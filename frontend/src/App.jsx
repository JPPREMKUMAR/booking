import { TailSpin } from 'react-loader-spinner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainContextProvider } from './context/MainContext'
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import Innova from "./pages/Innova"
import Outstation from "./pages/Outstation"
import LuxuryCars from "./pages/LuxuryCars"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Login from "./pages/Login"
import Register from "./pages/Register"
import MyProfile from "./pages/MyProfile"
import Thankyou from './pages/Thankyou'
import Footer from './components/Footer'
import HelmetSeo from "./components/HelmetSeo"
import ContactDetails from "./components/ContactDetails"
import AllRights from "./components/AllRights"
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfServices from "./pages/TermsOfServices"
import Bookings from "./pages/Bookings"

import AutoComplete from "./pages/AutoComplete"

import ScrollToTop from "./components/ScrollToTop"
import AirportTaxi from './pages/AirportTaxi'


const App = () => {

  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>



      <div className="bg-gray-100  min-h-screen">
        <MainContextProvider>
          {isLoading ?
            < div className='flex flex-col  justify-center items-center min-h-screen py-10'>
              <TailSpin width={50} height={50} color="blue" />
            </div> :
            <>
              <HelmetSeo />
              <Navbar />
              <ScrollToTop />
              <Routes>


                <Route path="/" element={<Home />} />
                {// <Route exact path="/booking/:id" element={<Booking />} /> 
                }
                <Route path="/booking/:id" element={<Bookings />} />
                <Route path="airportTaxi" element={<AirportTaxi />} />
                <Route path="innovaTaxi" element={<Innova />} />
                <Route path="/outStation" element={<Outstation />} />
                <Route path="/luxuryCars" element={<LuxuryCars />} />
                <Route path="/services" element={<Services />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/myProfile" element={<MyProfile />} />
                <Route path="/thankyou/:bookingId" element={<Thankyou />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                <Route path="/autoComplete" element={<AutoComplete />} />

              </Routes>
              <Footer />
              <ContactDetails />
              <AllRights />

            </>

          }
        </MainContextProvider>
      </div >

    </div >

  )
}



export default App