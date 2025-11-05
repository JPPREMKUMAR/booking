import { useContext } from "react"

import { Link } from "react-router-dom"
import axios from 'axios'
import { MainContext } from "../context/MainContext"


const VehicleItem = ({ item, getAllVehicles }) => {

    const { backendUrl, token, navigate, setToken } = useContext(MainContext)

    const { vehicle, imageUrl, price, capacity, bookingType, _id } = item
    //console.log(_id)

    const deleteVehicle = async () => {
        const url = `${backendUrl}/api/vehicle/delete/${_id}`
        const response = await axios.post(url, { id: _id }, { headers: { token } })
        console.log(response.data)
        navigate("/allVehicles")
        console.log('delete vehicle')
        getAllVehicles()

    }



    return (

        <div className="bg-white rounded-md px-5 py-3 ">
            <div className="px-3 py-2">
                <img src={imageUrl} alt="imageUrl" className="w-full h-[120px]" />
            </div>
            <div className="my-4">
                <p className="text-md font-semibold text-gray-600">Vehicle : <span className="text-gray-900">{vehicle}</span> </p>
                <p className="text-md font-semibold text-gray-600">Booking Type : <span className="text-gray-900">{bookingType}</span> </p>
                <p className="text-md font-semibold text-gray-600">Price : <span className="text-gray-900">{price}</span> </p>
                <p className="text-md font-semibold text-gray-600">Capacity : <span className="text-gray-900">{capacity}</span> </p>
            </div>

            <div className="flex justify-between items-center">
                <button className="text-white rounded-md outline-none px-7 py-2 bg-blue-600 font-semibold cursor-pointer">
                    <Link to={`/vehicles/${_id}`} >
                        Update
                    </Link>
                </button>
                <button onClick={deleteVehicle} className="text-white rounded-md outline-none px-7 py-2 bg-red-600 font-semibold cursor-pointer">
                    Delete
                </button>

            </div>

        </div>
    )
}



export default VehicleItem