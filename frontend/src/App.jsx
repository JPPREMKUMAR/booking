import { TailSpin } from 'react-loader-spinner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainContextProvider } from './context/MainContext'
import { useState, useEffect } from "react"
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
import ContactDetails from "./components/ContactDetails"
import AllRights from "./components/AllRights"
import Policy from './pages/Policy'




const App = () => {

  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>



      <div className=" min-h-screen">
        <MainContextProvider>
          {isLoading ?
            < div className='flex flex-col  justify-center items-center min-h-screen py-10'>
              <TailSpin width={50} height={50} color="blue" />
            </div> :
            <>
              <HelmetSeo />
              <Navbar />

              <Routes>

                <Route path="/" element={<Home />} />
                <Route exact path="/booking" element={<Booking />} />
                <Route path="/innovaTaxi" element={<Innovataxi />} />
                <Route path="/outStation" element={<Outstation />} />
                <Route path="/services" element={<Services />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/myProfile" element={<MyProfile />} />
                <Route path="/thankyou/:bookingId" element={<Thankyou />} />
                <Route path="/policy" element={<Policy />} />

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