
import VehicleItem from "./VehicleItem"

import { image1, image2, image3, image4, image5, image6 } from "../assets/assets"

const vehicleList1 = [

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
import { MainContext } from "../context/MainContext"
import { useContext } from "react"



const VehicleList = ({ Title, bookingTypeId }) => {
    console.log(bookingTypeId)
    const { vehicleList } = useContext(MainContext)

    return (

        <div>
            <h1 className="font-bold text-3xl text-center mb-4 mt-4 sm:text-4xl text-[#FFD700]">{Title}</h1>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 items-center">
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