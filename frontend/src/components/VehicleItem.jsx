import { useContext } from "react"
import { image1, image2, image3, image4, image5, image6 } from "../assets/assets"

import { IoPeopleSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom"
import { MainContext } from "../context/MainContext";

import { FaUsers } from "react-icons/fa";



const VehicleItem = ({ item }) => {

    // console.log(item)

    const { adminPhoneNumber } = useContext(MainContext)

    const { vehicleName, capacity, imageUrl, price, vehicleType } = item



    const onClickCard = () => {

        console.log(item)

    }



    return (

        <div className="flex  flex-col items-center gap-2 text-[#111827]  sm:m-2 m-2 my-4 hover:m-5 transition duration-300 ease-in-out  rounded-md shadow-md  bg-[#F9FAFB]" onClick={onClickCard}>
            <img src={imageUrl} alt={`${vehicleName}`} className="w-[220px] h-[120px]" />
            <h1 className="text-lg text-[#111827] font-bold text-medium sm:text-2xl">{vehicleName}</h1>
            <div className="flex items-center gap-x-2 text-sm sm:text-2xl">
                <FaUsers className="text-[#FFD700]" />
                <p className="text-lg sm:text-xl text-[#111827] font-semibold">Capacity : {capacity}+1</p>
            </div>
            <div className="flex items-center gap-x-2">
                <p className="text-[#111827]   text-md  sm:text-xl font-semibold">A/C </p>
                <p className="text-[#111827]  text-md  sm:text-xl font-semibold">₹</p>
                <p className="text-[#111827]  text-md  sm:text-xl font-semibold">{price}</p>
            </div>
            <div className="flex items-center gap-x-3">

                <button type="button" className="sm:bg-blue-400 bg-blue-600 text-white px-5 py-2 rounded-md text-md sm:text-xl sm:px-6 font-semibold  mb-5 mt-2 cursor-pointer">
                    <Link to="/booking" >
                        Book Now
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default VehicleItem