import { createContext } from "react";
import { useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"
import { image1, image2, image3, image4, image5, image6 } from "../assets/assets"

export const MainContext = createContext();




export const MainContextProvider = (props) => {
    const rupees = 10


    const categoriesList = [
        { id: uuid(), name: "AIRPORT TAXI" },
        { id: uuid(), name: "INNOVA TAXI" },
        { id: uuid(), name: "OUTSTATION TAXI" },
        { id: uuid(), name: "LOCAL PACKAGE" },

    ]

    const vehicleList = [

        // ----------------- AIRPORT TAXI -----------------
        {
            vehicleName: "Suzuki Dzire",
            capacity: 4,
            price: 2500,
            vehicleType: "AIRPORT TAXI",
            imageUrl: image1, id: uuid()

        },
        {
            vehicleName: "Toyota Etios",
            capacity: 4,
            price: 2800,
            vehicleType: "AIRPORT TAXI",
            imageUrl: image2, id: uuid()

        },
        {
            vehicleName: "Hyundai Xcent",
            capacity: 4,
            price: 2600,
            vehicleType: "AIRPORT TAXI",
            imageUrl: image3, id: uuid()

        },
        {
            vehicleName: "Honda Amaze",
            capacity: 4,
            price: 2700,
            vehicleType: "AIRPORT TAXI",
            imageUrl: image4, id: uuid()

        },
        {
            vehicleName: "Tata Zest",
            capacity: 4,
            price: 2400,
            vehicleType: "AIRPORT TAXI",

            imageUrl: image5, id: uuid()

        },
        {
            vehicleName: "Tata Zest",
            capacity: 10,
            price: 4000,
            vehicleType: "AIRPORT TAXI",
            imageUrl: image6, id: uuid()

        },
    ]


    const value = {

        rupees,
        categoriesList,
        vehicleList

    }

    return <MainContext.Provider value={value}>

        {props.children}

    </MainContext.Provider>

}