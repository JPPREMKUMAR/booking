
import MainContextProvider from "./context/MainContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import AddItem from "./pages/AddItem"




const App = () => {




  return (
    <div>
      <MainContextProvider>

        <Navbar />
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/addItem" element={<AddItem />} />


        </Routes>

      </MainContextProvider>



    </div>
  )
}



export default App