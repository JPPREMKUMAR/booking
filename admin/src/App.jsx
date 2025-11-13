
import MainContextProvider from "./context/MainContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import AddItem from "./pages/AddItem"
import AllVehicles from "./pages/AllVehicles"
import VehicleDetails from "./pages/VehicleDetails"
import Categories from "./pages/Categories"




const App = () => {




  return (
    <div>
      <MainContextProvider>

        <Navbar />
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/addItem" element={<AddItem />} />
          <Route path="/allVehicles" element={<AllVehicles />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
          <Route path="/Categories" element={<Categories />} />

        </Routes>

      </MainContextProvider>



    </div>
  )
}



export default App