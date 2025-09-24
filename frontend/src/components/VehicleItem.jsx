import { image1, image2, image3, image4, image5, image6 } from "../assets/assets"

import { IoPeopleSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";

const VehicleItem = ({ item }) => {

    console.log(item)

    const { vehicleName, capacity, imageUrl, price, vehicleType } = item



    return (

        <div className="bg-white pb-3 px-4 py-4 rounded-lg shadow-lg flex  flex-col items-center gap-3 sm:m-5 m-2 mb-2  transform transition-transform duration-300 ease-out hover:scale-120 ">
            <img src={imageUrl} alt={`${vehicleName}`} className="w-2/3 h-35 sm:h-44" />
            <h1 className="text-lg text-gray-800 font-bold text-medium sm:text-2xl">{vehicleName}</h1>
            <div className="flex items-center gap-x-2 text-md sm:text-xl">
                <IoPeopleSharp className="text-gray-600" />
                <p className="text-gray-600 text-md sm:text-xl ">Capacity : {capacity}+1</p>
            </div>
            <div className="flex items-center gap-x-2">
                <p className="text-gray-600 text-md  sm:text-xl font-semibold">A/C </p>
                <p className="text-gray-600 text-md  sm:text-xl font-semibold">₹</p>
                <p className="text-gray-600 text-md  sm:text-xl font-semibold">{price}</p>
            </div>
            <button type="button" className="sm:bg-blue-400 bg-blue-600 text-white px-5 py-2 rounded-md text-md sm:text-xl sm:px-6 sm:text-slate-200 hover:bg-blue-600 hover:text-white mb-5 mt-2">Book Now</button>
        </div>
    )
}

export default VehicleItem