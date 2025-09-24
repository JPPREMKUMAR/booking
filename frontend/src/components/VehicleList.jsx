
import VehicleItem from "./VehicleItem"

import { image1, image2, image3, image4, image5, image6 } from "../assets/assets"

const vehicleList = [

    // ----------------- AIRPORT TAXI -----------------
    {
        vehicleName: "Suzuki Dzire",
        capacity: 4,
        price: 2500,
        vehicleType: "AIRPORT TAXI",
        imageUrl: image1

    },
    {
        vehicleName: "Toyota Etios",
        capacity: 4,
        price: 2800,
        vehicleType: "AIRPORT TAXI",
        imageUrl: image2
    },
    {
        vehicleName: "Hyundai Xcent",
        capacity: 4,
        price: 2600,
        vehicleType: "AIRPORT TAXI",
        imageUrl: image3
    },
    {
        vehicleName: "Honda Amaze",
        capacity: 4,
        price: 2700,
        vehicleType: "AIRPORT TAXI",
        imageUrl: image4
    },
    {
        vehicleName: "Tata Zest",
        capacity: 4,
        price: 2400,
        vehicleType: "AIRPORT TAXI",

        imageUrl: image5
    },
    {
        vehicleName: "Tata Zest",
        capacity: 10,
        price: 4000,
        vehicleType: "AIRPORT TAXI",
        imageUrl: image6
    },
]





const VehicleList = ({ Title }) => {


    return (

        <div >
            <h1 className="text-gray-900 font-semibold text-xl text-center mb-2 mt-2 ">{Title}</h1>

            <div className="grid grid-cols-1 m-5 gap-2 gap-y-3">
                {
                    vehicleList.map((item, index) => (
                        <VehicleItem key={index} item={item} />

                    ))

                }
            </div>
        </div>
    )
}

export default VehicleList