import { Link } from 'react-router-dom'
import { useState } from 'react'


import { logo, menu_icon, cross_icon } from "../assets/assets"




const Navbar = () => {


    const [isMenu, setIsMenu] = useState(false)

    return (
        <div>


            <div className=" h-20 py-4 px-6 flex items-center justify-between border-b border-slate-300 sm:hidden  ">
                <div className='max-w-40'>
                    <img src={logo} alt="logo" className="max-w-35 bg-transparent self-center hover:max-w-40" />
                </div>
                <button className=" bg-blue-500 px-1 py-1 outline-none cursor-pointer rounded-md text-white font-bold text-sm self-center max-w-30"><a href="tel:+919999999999">+91 9999999999</a>
                </button>
                <div className='ml-5 self-center'>
                    <button type="button" onClick={() => setIsMenu((prev) => !prev)}>
                        {
                            isMenu ? <img src={cross_icon} className=" text-gray-900 max-w-8 max-h-8  " /> : <img src={menu_icon} className=" text-gray-900 max-w-8 max-h-8 " />
                        }

                    </button>
                </div>

            </div>

            {/* Small Device Menu Navbar */}

            {

                isMenu && <div className='mb-5 mt-4 flex flex-col gap-3 md:hidden'>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/" className="flex items-center gap-x-3 px-4  cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg text-gray-600 hover:text-gray-900">Home</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/booking" className="flex items-center gap-x-3 px-4 cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg text-gray-600 hover:text-gray-900">Booking</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/innovastation" className="flex items-center gap-x-3 px-4  cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg text-gray-600 hover:text-gray-900">Innova Taxi</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/outstation" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg text-gray-600 hover:text-gray-900">Outstation</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/services" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg text-gray-600 hover:text-gray-900">Services</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/about" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg text-gray-600 hover:text-gray-900">About Us</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/contact" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg text-gray-600 hover:text-gray-900">Contact Us</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/login" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <button className="self-center text-md outline-none bg-blue-500 px-6 py-1 text-white rounded-md  hover:bg-blue-700 ">Login</button>
                    </Link>


                </div>
            }

            {/* Medium Screen  */}

            <div className="h-18 hidden sm:block sm:flex flex-row items-center justify-around px-6 py-4 border-b border-slate-300">
                <Link to="/" className='w-60 h-7'>
                    <img src={logo} alt="logo" className="w-35 bg-transparent self-center hover:w-50" />
                </Link>

                <div className=''>

                    <Link to="/" className="px-4 text-md hover:text-lg w-40 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Home
                    </Link>
                    <Link to="/booking" className="px-4 text-md hover:text-lg w-40  text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Booking
                    </Link>
                    <Link to="/innovataxi" className="px-4 text-md hover:text-lg w-40  text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Innova Taxi
                    </Link>
                    <Link to="/outstation" className="px-4 text-md hover:text-lg w-40  text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Outstation
                    </Link>
                    <Link to="/service" className="px-4 text-md  hover:text-lg w-40 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Services
                    </Link>
                    <Link to="/about" className="px-4 text-md  hover:text-lg w-40 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        About Us
                    </Link>
                    <Link to="/contact" className="px-4 text-md  hover:text-lg w-50 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Contact Us
                    </Link>
                    <Link to="/login" className="px-4 text-md  hover:text-lg w-50  text-gray-600 hover:text-gray-900 cursor-pointer ">
                        <button className='bg-blue-500 outline-none px-7 py-2 rounded-md text-white hover:bg-blue-600'>Login</button>
                    </Link>
                </div>
            </div>

        </div >
    )
}


export default Navbar