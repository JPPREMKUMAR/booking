import { Link } from "react-router-dom"


const VehicleItem = ({ item }) => {

    const { vehicle, imageUrl, price, capacity, bookingType, _id } = item
    console.log(_id)

    return (

        <Link to={`/vehicles/${_id}`} className="bg-white rounded-md px-3 py-3 cursor-pointer">
            <div className="px-3 py-2">
                <img src={imageUrl} alt="imageUrl" className="w-full h-[120px]" />
            </div>
            <div className="my-4">
                <p className="text-md font-semibold text-gray-600">Vehicle : <span className="text-gray-900">{vehicle}</span> </p>
                <p className="text-md font-semibold text-gray-600">Booking Type : <span className="text-gray-900">{bookingType}</span> </p>
                <p className="text-md font-semibold text-gray-600">Price : <span className="text-gray-900">{price}</span> </p>
                <p className="text-md font-semibold text-gray-600">Capacity : <span className="text-gray-900">{capacity}</span> </p>



            </div>

        </Link>
    )
}



export default VehicleItem