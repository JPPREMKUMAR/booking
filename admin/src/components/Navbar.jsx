import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { MainContext } from "../context/MainContext"
import { logo, menu_icon, cross_icon } from "../assets/assets"
import Cookies from "js-cookie"
const Navbar = () => {

    const { token, navigate, setToken } = useContext(MainContext)

    const [isMenu, setIsMenu] = useState(false)


    const changeManu = () => {
        setIsMenu((prev) => !prev)
    }


    const onClickLogout = () => {
        navigate("/login")
        Cookies.remove("token")
        setToken("")
        setIsMenu(false)


    }



    return (


        <div className="bg-gray-200 px-5 py-5 w-full">
            <div className="flex justify-between  items-center sm:w-full sm:justify-between ">

                <div className="sm:w-1/3" onClick={() => navigate("/")} >
                    <img src={logo} alt="Logo" width={130} height={100} />
                </div>

                <button onClick={changeManu} className="sm:hidden flex items-center justify-center">
                    {
                        isMenu ? <img src={cross_icon} alt="Cross" width={30} height={30} /> : <img src={menu_icon} alt="Menu" width={40} height={30} />
                    }
                </button>

                <div className="hidden  sm:block sm:flex justify-around gap-x-15  items-center w-2/3">
                    <Link to="/" className="text-md font-semibold " ><p>Home</p></Link>
                    <Link to="/addItem" className="text-md font-semibold "><p>Add Item</p></Link>
                    <Link to="/pendingBookings" className="text-md font-semibold "><p>Pending Bookings</p></Link>
                    <Link to="/completedBookings" className="text-md font-semibold "><p>Completed Bookings</p></Link>
                    {
                        token === undefined || token === "" ? <Link to="/login" className="text-md font-semibold" onClick={(prev) => setIsMenu(!prev)}>
                            <button className="bg-blue-500 text-white rounded-md px-8 py-2 ">Login</button>

                        </Link> :
                            <button onClick={onClickLogout} className="text-white bg-red-500 rounded-md px-2 py-2 outline-none w-30 font-semibold cursor-pointer">Logout</button>
                    }


                </div>

            </div>

            {
                isMenu && <div className="sm:hidden flex flex-col gap-y-2 my-5">

                    <Link to="/" className="text-md font-semibold" onClick={(prev) => setIsMenu(!prev)}><p>Home</p></Link>
                    <Link to="/addItem" className="text-md font-semibold" onClick={(prev) => setIsMenu(!prev)} ><p>Add Item</p></Link>
                    <Link to="/pendingBookings" className="text-md font-semibold" onClick={(prev) => setIsMenu(!prev)}><p>Pending Bookings</p></Link>
                    <Link to="/completedBookings" className="text-md font-semibold" onClick={(prev) => setIsMenu(!prev)}><p>Completed Bookings</p></Link>
                    {
                        token === undefined || token === "" ? <Link to="/login" className="text-md font-semibold" onClick={(prev) => setIsMenu(!prev)}>

                            <button className="bg-blue-500 text-white rounded-md px-8 py-2 ">
                                Login
                            </button>
                        </Link> :
                            <button onClick={onClickLogout} className="text-white bg-red-500 rounded-md px-2 py-2 outline-none w-30 font-semibold cursor-pointer">Logout</button>
                    }

                </div>
            }
        </div>
    )
}



export default Navbar