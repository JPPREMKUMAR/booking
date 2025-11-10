import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { MainContext } from '../context/MainContext'
import Cookies from "js-cookie"
import { logo, menu_icon, cross_icon } from "../assets/assets"

import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { FaTaxi } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { RiLoginCircleFill } from "react-icons/ri";
import { RiLogoutCircleRFill } from "react-icons/ri";






const Navbar = () => {


    const [isMenu, setIsMenu] = useState(false)

    const { token, setToken, adminPhoneNumber } = useContext(MainContext)


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
        <div className=' w-full  bg-[#0a0a12] mb-10 '>


            <div className="py-3 px-3 flex items-center justify-between border-b border-slate-300 sm:hidden  ">
                <div className=' px-2'>
                    <img src={logo} alt="logo" className="w-[130px] h-[50px]  " />
                </div>
                <button className=""><a href={`tel:+91${adminPhoneNumber}`} className="bg-blue-500 px-2 py-2 outline-none cursor-pointer rounded-md  text-white font-bold text-sm self-center" >+91 {adminPhoneNumber}</a>
                </button>
                <div className='text-center flex items-center w-[30px] h-[30px] '>
                    <button type="button" onClick={() => setIsMenu((prev) => !prev)}>
                        {
                            isMenu ? <RxCross1 className="w-[30px] h-[30px] text-white " />
                                : <IoMenu className="w-[30px] h-[30px] text-white " />
                        }

                    </button>
                </div>

            </div>

            {/* Small Device Menu Navbar */}

            {

                isMenu && <div className='px-3 py-5 flex flex-col gap-3 md:hidden font-bold text-white transition-colors duration-300 text-lg '>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/" className="flex items-center gap-x-3 px-4  cursor-pointer     ">
                        <IoHome className="self-center text-white" />
                        <p className="self-center text-lg">Home</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/booking" className="flex items-center gap-x-3 px-4 cursor-pointer    ">
                        <FaTaxi className="self-center text-white" />
                        <p className="self-center text-lg">Booking</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/innovaStation" className="flex items-center gap-x-3 px-4  cursor-pointer    ">
                        <FaCar className="self-center text-white" />
                        <p className="self-center text-lg ">Innova Taxi</p>
                    </Link>

                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/outStation" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                        <FaCar className="self-center text-white" />
                        <p className="self-center text-lg ">Outstation</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/services" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                        <MdMiscellaneousServices className="self-center text-white" />
                        <p className="self-center text-lg ">Services</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/aboutUs" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                        <BsInfoCircleFill className="self-center text-white" />
                        <p className="self-center text-lg ">About Us</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/contactUs" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                        <MdContacts className="self-center text-white" />
                        <p className="self-center text-lg ">Contact Us</p>
                    </Link>

                    {
                        token !== '' && <Link onClick={() => setIsMenu((prev) => !prev)} to="/myProfile" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                            <FaCircleUser className="self-center text-white" />
                            <p className="self-center text-lg ">My Profile</p>
                        </Link>
                    }
                    <div>
                        {
                            token === '' ? <Link onClick={() => setIsMenu((prev) => !prev)} to="/login" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                                <RiLoginCircleFill className="self-center text-blue-600" />
                                <p className="self-center text-lg text-blue-600 ">Login In </p>                            </Link>
                                : <Link onClick={onClickLogout} className="flex items-center gap-x-3 px-4 cursor-pointer">
                                    <RiLogoutCircleRFill className="self-center text-red-500" />
                                    <p className="self-center text-lg text-red-500 ">Logout</p>
                                </Link>
                        }
                    </div>


                </div>
            }

            {/* Medium Screen  */}

            <div className=" hidden sm:block sm:flex flex-row items-center justify-around px-6 py-8 border-b border-slate-300 font-bold">
                <Link to="/" className='w-60 h-7 flex items-center'>
                    <img src={logo} alt="logo" className="w-[300px] h-[60px] " />
                </Link>

                <div className=''>

                    <Link to="/" className="px-4 text-xl hover:text-lg max-w-30 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Home
                    </Link>
                    <Link to="/booking" className="px-4 text-xl hover:text-lg max-w-30  text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Booking
                    </Link>
                    <Link to="/innovaTaxi" className="px-4 text-xl hover:text-lg max-w-30  text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Innova Taxi
                    </Link>

                    <Link to="/outStation" className="px-4 text-xl hover:text-lg max-w-30  text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Outstation
                    </Link>
                    <Link to="/services" className="px-4 text-xl  hover:text-lg max-w-30 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Services
                    </Link>
                    <Link to="/aboutUs" className="px-4 text-xl  hover:text-lg max-w-30 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        About Us
                    </Link>
                    <Link to="/contactUs" className="px-4 text-xl  hover:text-lg max-w-30 text-gray-600 hover:text-gray-900 cursor-pointer ">
                        Contact Us
                    </Link>
                    {
                        token !== '' && <Link to="/myProfile" className="px-4 text-md  hover:text-lg max-w-30 text-gray-600 hover:text-gray-900 cursor-pointer ">
                            My Profile
                        </Link>
                    }
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