import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { MainContext } from '../context/MainContext'
import Cookies from "js-cookie"
import { logo, menu_icon, cross_icon } from "../assets/assets"




const Navbar = () => {


    const [isMenu, setIsMenu] = useState(false)

    const { token, setToken } = useContext(MainContext)


    const navigate = useNavigate()

    const onClickLogout = () => {
        Cookies.remove("token")
        setToken('')
        navigate('/')
    }
    useEffect(() => {
        console.log(token)

    }, [])

    return (
        <div className='position:fixed w-full'>


            <div className=" h-20 py-4 px-3 flex items-center justify-between border-b border-slate-300 sm:hidden  ">
                <div className='max-w-40 '>
                    <img src={logo} alt="logo" className="max-w-30 bg-transparent self-center " />
                </div>
                <button className="ml-2 bg-blue-500 px-2 py-2 outline-none cursor-pointer rounded-md  text-white font-bold text-sm self-center max-w-30"><a href="tel:+919999999999" className='text-[12px] px-1 font-bold' >+91 9999999999</a>
                </button>
                <div className='ml-5 self-center w-10 h-10 flex items-center'>
                    <button type="button" onClick={() => setIsMenu((prev) => !prev)}>
                        {
                            isMenu ? <img src={cross_icon} className=" text-gray-900 max-w-10 max-h-8  " /> : <img src={menu_icon} className=" text-gray-900 max-w-8 max-h-8 " />
                        }

                    </button>
                </div>

            </div>

            {/* Small Device Menu Navbar */}

            {

                isMenu && <div className='mb-5 mt-4 flex flex-col gap-3 md:hidden font-bold text-gray-900 '>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/" className="flex items-center gap-x-3 px-4  cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg">Home</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/booking" className="flex items-center gap-x-3 px-4 cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg">Booking</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/innovaStation" className="flex items-center gap-x-3 px-4  cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg ">Innova Taxi</p>
                    </Link>

                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/outStation" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg ">Outstation</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/services" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg ">Services</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/aboutUs" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg ">About Us</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/contactUs" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                        {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                        <p className="self-center text-lg ">Contact Us</p>
                    </Link>
                    <div>
                        {
                            token === '' ? <Link onClick={() => setIsMenu((prev) => !prev)} to="/login" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                                {/*<FaHome className="self-center text-gray-600 w-8 h-8" /> */}
                                <button className="self-center text-md outline-none bg-blue-500 px-12 py-2 text-white rounded-md  hover:bg-blue-700 ">Login</button>
                            </Link>
                                : <button onClick={onClickLogout} className="self-center text-md outline-none bg-red-500 px-12 py-2 text-white rounded-md  hover:bg-red-700 ">Logout</button>
                        }
                    </div>


                </div>
            }

            {/* Medium Screen  */}

            <div className="h-18 hidden sm:block sm:flex flex-row items-center justify-around px-6 py-4 border-b border-slate-300">
                <Link to="/" className='w-60 h-7'>
                    <img src={logo} alt="logo" className="w-35 bg-transparent self-center hover:w-50" />
                </Link>

                <div className=''>

                    <Link to="/" className="px-4 text-md hover:text-lg max-w-30 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Home
                    </Link>
                    <Link to="/booking" className="px-4 text-md hover:text-lg max-w-30  text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Booking
                    </Link>
                    <Link to="/innovaTaxi" className="px-4 text-md hover:text-lg max-w-30  text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Innova Taxi
                    </Link>

                    <Link to="/outStation" className="px-4 text-md hover:text-lg max-w-30  text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Outstation
                    </Link>
                    <Link to="/services" className="px-4 text-md  hover:text-lg max-w-30 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Services
                    </Link>
                    <Link to="/aboutUs" className="px-4 text-md  hover:text-lg max-w-30 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        About Us
                    </Link>
                    <Link to="/contactUs" className="px-4 text-md  hover:text-lg max-w-30 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Contact Us
                    </Link>
                    {
                        token === '' ? <Link to="/login" className="px-4 text-md  hover:text-lg max-w-30  text-gray-600 hover:text-gray-900 cursor-pointer ">
                            <button className='bg-blue-500 outline-none px-7 py-2 rounded-md text-white hover:bg-blue-600'>Login</button>
                        </Link> : <button onClick={onClickLogout} className='bg-red-500 outline-none px-7 py-2 rounded-md text-white hover:bg-red-600'>Logout</button>
                    }
                </div>
            </div>

        </div >
    )
}


export default Navbar