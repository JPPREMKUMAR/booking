import { useState } from "react"
import { Link } from 'react-router-dom'

import { logo, menu_icon, cross_icon } from "../assets/assets"

const Navbar = () => {

    const [isMenu, setIsMenu] = useState(false)


    const changeManu = () => {
        setIsMenu((prev) => !prev)
    }

    return (


        <div className="bg-gray-200 px-5 py-5 w-full">
            <div className="flex justify-between  items-center sm:w-full sm:justify-between ">

                <div className="sm:w-1/3">
                    <img src={logo} alt="Logo" width={130} height={100} />
                </div>

                <button onClick={changeManu} className="sm:hidden flex items-center justify-center">
                    {
                        isMenu ? <img src={cross_icon} alt="Cross" width={30} height={30} /> : <img src={menu_icon} alt="Menu" width={40} height={30} />
                    }
                </button>

                <div className="hidden  sm:block flex justify-between gap-x-15  items-center w-2/3">
                    <Link to="/home" className="text-xl font-semibold mx-7">Home</Link>
                    <Link to="/addItem" className="text-xl font-semibold mx-7">Add Item</Link>
                    <Link to="/pendingBookings" className="text-xl font-semibold mx-7">Pending Bookings</Link>
                    <Link to="/completedBookings" className="text-xl font-semibold mx-7">Completed Bookings</Link>
                    <Link to="/login" className="text-xl font-semibold mx-7">Login</Link>

                </div>

            </div>

            {
                isMenu && <div className="sm:hidden flex flex-col gap-y-2 my-5">

                    <Link to="/home" className="text-md font-semibold">Home</Link>
                    <Link to="/addItem" className="text-md font-semibold">Add Item</Link>
                    <Link to="/pendingBookings" className="text-md font-semibold">Pending Bookings</Link>
                    <Link to="/completedBookings" className="text-md font-semibold">Completed Bookings</Link>
                    <Link to="/login" className="text-md font-semibold">Login</Link>

                </div>
            }
        </div>
    )
}



export default Navbar