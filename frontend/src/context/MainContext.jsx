import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"
import { image1, image2, image3, image4, image5, image6 } from "../assets/assets"
import Cookies from "js-cookie"
import axios from "axios"





export const MainContext = createContext();




export const MainContextProvider = (props) => {
    const rupees = 10
    const navigate = useNavigate()

    const backendUrl = import.meta.env.VITE_BACK_END_URL

    // console.log(backendUrl)
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
    const getToken = Cookies.get("token")


    const [token, setToken] = useState(getToken === undefined ? '' : getToken)


    //console.log(token)

    // Get User Profile 






    const [userDetails, setUserDetails] = useState({})


    const getUserProfile = async () => {

        const response = await axios.post(backendUrl + "/api/user/userProfile", {}, { headers: { token: token } })
        //console.log(response.data)
        const responseData = response.data.userDetails
        //console.log(responseData)
        setUserDetails(responseData)


    }

    useEffect(() => {

        getUserProfile()
    }, [])




    const value = {

        rupees,
        categoriesList,
        vehicleList,
        backendUrl, token, setToken,
        userDetails, navigate, getUserProfile

    }

    return <MainContext.Provider value={value}>

        {props.children}

    </MainContext.Provider>

}