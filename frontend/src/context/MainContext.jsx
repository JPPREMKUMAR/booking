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

    const adminPhoneNumber = import.meta.env.VITE_PHONE_NUMBER


    console.log(backendUrl)
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



    // PICKUP TIME LIST
    const pickupTimeList = [
        { time: "01:00 AM", id: uuid() },
        { time: "01:15 AM", id: uuid() },
        { time: "01:30 AM", id: uuid() },
        { time: "01:45 AM", id: uuid() },
        { time: "02:00 AM", id: uuid() },
        { time: "02:15 AM", id: uuid() },
        { time: "02:30 AM", id: uuid() },
        { time: "02:45 AM", id: uuid() },
        { time: "03:00 AM", id: uuid() },
        { time: "03:15 AM", id: uuid() },
        { time: "03:30 AM", id: uuid() },
        { time: "03:45 AM", id: uuid() },
        { time: "04:00 AM", id: uuid() },
        { time: "04:15 AM", id: uuid() },
        { time: "04:30 AM", id: uuid() },
        { time: "04:45 AM", id: uuid() },
        { time: "05:00 AM", id: uuid() },
        { time: "05:15 AM", id: uuid() },
        { time: "05:30 AM", id: uuid() },
        { time: "05:45 AM", id: uuid() },
        { time: "06:00 AM", id: uuid() },
        { time: "06:15 AM", id: uuid() },
        { time: "06:30 AM", id: uuid() },
        { time: "06:45 AM", id: uuid() },
        { time: "07:00 AM", id: uuid() },
        { time: "07:15 AM", id: uuid() },
        { time: "07:30 AM", id: uuid() },
        { time: "07:45 AM", id: uuid() },
        { time: "08:00 AM", id: uuid() },
        { time: "08:15 AM", id: uuid() },
        { time: "08:30 AM", id: uuid() },
        { time: "08:45 AM", id: uuid() },
        { time: "09:00 AM", id: uuid() },
        { time: "09:15 AM", id: uuid() },
        { time: "09:30 AM", id: uuid() },
        { time: "09:45 AM", id: uuid() },
        { time: "10:00 AM", id: uuid() },
        { time: "10:15 AM", id: uuid() },
        { time: "10:30 AM", id: uuid() },
        { time: "10:45 AM", id: uuid() },
        { time: "11:00 AM", id: uuid() },
        { time: "11:15 AM", id: uuid() },
        { time: "11:30 AM", id: uuid() },
        { time: "11:45 AM", id: uuid() },
        { time: "12:00 PM", id: uuid() },
        { time: "12:15 PM", id: uuid() },
        { time: "12:30 PM", id: uuid() },
        { time: "12:45 PM", id: uuid() },
        { time: "01:00 PM", id: uuid() },
        { time: "01:15 PM", id: uuid() },
        { time: "01:30 PM", id: uuid() },
        { time: "01:45 PM", id: uuid() },
        { time: "02:00 PM", id: uuid() },
        { time: "02:15 PM", id: uuid() },
        { time: "02:30 PM", id: uuid() },
        { time: "02:45 PM", id: uuid() },
        { time: "03:00 PM", id: uuid() },
        { time: "03:15 PM", id: uuid() },
        { time: "03:30 PM", id: uuid() },
        { time: "03:45 PM", id: uuid() },
        { time: "04:00 PM", id: uuid() },
        { time: "04:15 PM", id: uuid() },
        { time: "04:30 PM", id: uuid() },
        { time: "04:45 PM", id: uuid() },
        { time: "05:00 PM", id: uuid() },
        { time: "05:15 PM", id: uuid() },
        { time: "05:30 PM", id: uuid() },
        { time: "05:45 PM", id: uuid() },
        { time: "06:00 PM", id: uuid() },
        { time: "06:15 PM", id: uuid() },
        { time: "06:30 PM", id: uuid() },
        { time: "06:45 PM", id: uuid() },
        { time: "07:00 PM", id: uuid() },
        { time: "07:15 PM", id: uuid() },
        { time: "07:30 PM", id: uuid() },
        { time: "07:45 PM", id: uuid() },
        { time: "08:00 PM", id: uuid() },
        { time: "08:15 PM", id: uuid() },
        { time: "08:30 PM", id: uuid() },
        { time: "08:45 PM", id: uuid() },
        { time: "09:00 PM", id: uuid() },
        { time: "09:15 PM", id: uuid() },
        { time: "09:30 PM", id: uuid() },
        { time: "09:45 PM", id: uuid() },
        { time: "10:00 PM", id: uuid() },
        { time: "10:15 PM", id: uuid() },
        { time: "10:30 PM", id: uuid() },
        { time: "10:45 PM", id: uuid() },
        { time: "11:00 PM", id: uuid() },
        { time: "11:15 PM", id: uuid() },
        { time: "11:30 PM", id: uuid() },
        { time: "11:45 PM", id: uuid() }
    ]



    const monthsList = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
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
        userDetails, navigate, getUserProfile,
        pickupTimeList, monthsList, adminPhoneNumber

    }

    return <MainContext.Provider value={value}>

        {props.children}

    </MainContext.Provider>

}