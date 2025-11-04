

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"

const App = () => {


  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>

          <Route path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>



    </div>
  )
}



export default App