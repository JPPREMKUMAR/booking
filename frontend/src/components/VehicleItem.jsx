import { image1, image2, image3, image4, image5, image6 } from "../assets/assets"

const VehicleItem = ({ item }) => {

    console.log(item)

    const { vehicleName, capacity, imageUrl, price, vehicleType } = item



    return (

        <div className="bg-white px-4 py-4 rounded-lg shadow-lg flex  flex-col items-center hover:out-in ">
            <img src={imageUrl} alt={`${vehicleName}`} className="w-2/3 h-40" />
            <h1 className="text-lg text-gray-800 font-bold text-medium mb-2">{vehicleName}</h1>
        </div>
    )
}

export default VehicleItem