import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import AdminLogin from "./pages/AdminLogin"
import AdminHomePage from "./pages/AdminHomePage"
import AddItem from "./pages/AddItem"
import Bookings from "./pages/Bookings"









function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin/login" element={<AdminHomePage />} />
        <Route path="/" element={<AdminHomePage />} />
        <Route path="/admin/bookings" element={<Bookings />} />
        <Route path="/admin/addItem" element={<AddItem />} />
      </Routes>
    </>
  )
}

export default App
