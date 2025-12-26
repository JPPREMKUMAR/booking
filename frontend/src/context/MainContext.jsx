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

    const adminPhoneNumber1 = import.meta.env.VITE_PHONE_NUMBER1
    const adminPhoneNumber2 = import.meta.env.VITE_PHONE_NUMBER2
    const adminPhoneNumber3 = import.meta.env.VITE_PHONE_NUMBER3


    const adminEmail1 = import.meta.env.VITE_EMAIL1;
    const adminEmail2 = import.meta.env.VITE_EMAIL2;





    //console.log(backendUrl)

    const [vehicleList, setVehicleList] = useState([])

    const getAllVehicles = async () => {

        const response = await axios.post(backendUrl + "/api/user/getAllVehicles", {}, {});

        console.log(response.data.vehicles);
        setVehicleList(response.data.vehicles);

    }


    useEffect(() => {
        // getAllVehicles();

    }, [])


    const categoriesList = [
        { id: "AIRPORT_TAXI", name: "AIRPORT TAXI" },
        { id: "INNOVA_TAXI", name: "INNOVA TAXI" },
        { id: "OUTSTATION_TAXI", name: "OUTSTATION TAXI" },
        { id: "LOCAL_PACKAGE", name: "LOCAL PACKAGE" },

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



    const vehiclesNames = [


        { vehicleName: "Tata Indica", id: uuid() },
        { vehicleName: "Maruti Swift", id: uuid() },
        { vehicleName: "Hyundai i10", id: uuid() },
        { vehicleName: "Maruti WagonR", id: uuid() },
        { vehicleName: "Hyundai Santro", id: uuid() },

        { vehicleName: "Swift Dzire", id: uuid() },
        { vehicleName: "Toyota Etios", id: uuid() },
        { vehicleName: "Honda Amaze", id: uuid() },
        { vehicleName: "Hyundai Xcent", id: uuid() },
        { vehicleName: "Tata Tigor", id: uuid() },

        { vehicleName: "Toyota Innova", id: uuid() },
        { vehicleName: "Innova Crysta", id: uuid() },
        { vehicleName: "Maruti Ertiga", id: uuid() },
        { vehicleName: "Mahindra Xylo", id: uuid() },
        { vehicleName: "Mahindra Scorpio", id: uuid() },

        { vehicleName: "Toyota Camry", id: uuid() },
        { vehicleName: "Skoda Superb", id: uuid() },
        { vehicleName: "Honda City", id: uuid() },
        { vehicleName: "BMW 3 Series", id: uuid() },
        { vehicleName: "Mercedes-Benz E-Class", id: uuid() }

    ]







    {
        /*/ 
        const vehicleList = [
    
            // ----------------- AIRPORT TAXI -----------------
            {
                vehicleName: "Suzuki Dzire",
                capacity: 4,
                price: 2500,
                vehicleType: "AIRPORT TAXI",
                imageUrl: image1,
                id: uuid()
    
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
    
        
        /*/
    }






    //console.log(vehicleList);












    const categories = [
        {
            "_id": "6915849d7e23981516549785",
            "category": "AIRPORT TAXI",
            "id": "AIRPORT_TAXI",
            "vehicleNames": [
                {
                    "_id": "694dfd45d399f68437cba3dc",
                    "vehicleName": "Hatchback",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd4dd399f68437cba3df",
                    "vehicleName": "Sedan",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd58d399f68437cba3e2",
                    "vehicleName": "Prime Sedan",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd65d399f68437cba3e7",
                    "vehicleName": "SUV ERTIGA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd6bd399f68437cba3ea",
                    "vehicleName": "INNOVA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd75d399f68437cba3ed",
                    "vehicleName": "INNOVA CRYSTA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd81d399f68437cba3f0",
                    "vehicleName": "INNOVA HYCROSS",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd99d399f68437cba3f3",
                    "vehicleName": "TOYOTA FURTUNER (LUXURY VEHICLE )",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfda6d399f68437cba3f6",
                    "vehicleName": "TEMPO TRAVELLER",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "691584de7e23981516549787",
            "category": "INNOVA TAXI",
            "id": "INNOVA_TAXI",
            "vehicleNames": [
                {
                    "_id": "6915a6a1e51337b994b41a1d",
                    "vehicleName": "SUV",
                    "categoryId": "INNOVA_TAXI",
                    "__v": 0
                },
                {
                    "_id": "6915a6a7e51337b994b41a21",
                    "vehicleName": "INNOVA",
                    "categoryId": "INNOVA_TAXI",
                    "__v": 0
                },
                {
                    "_id": "6915a6bce51337b994b41a25",
                    "vehicleName": "7 Seat with Carrier Vehicle",
                    "categoryId": "INNOVA_TAXI",
                    "__v": 0
                },
                {
                    "_id": "6915a6efe51337b994b41a3a",
                    "vehicleName": "INNOVA CRYSTA",
                    "categoryId": "INNOVA_TAXI",
                    "__v": 0
                },
                {
                    "_id": "6915a882e51337b994b41a97",
                    "vehicleName": "Sudan",
                    "categoryId": "INNOVA_TAXI",
                    "__v": 0
                }
            ],
            "__v": 0
        },
        {
            "_id": "6915852b7e23981516549789",
            "category": "OUTSTATION",
            "id": "OUTSTATION_TAXI",
            "vehicleNames": [
                {
                    "_id": "694dfd45d399f68437cba3dc",
                    "vehicleName": "Hatchback",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd4dd399f68437cba3df",
                    "vehicleName": "Sedan",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd58d399f68437cba3e2",
                    "vehicleName": "Prime Sedan",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd65d399f68437cba3e7",
                    "vehicleName": "SUV ERTIGA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd6bd399f68437cba3ea",
                    "vehicleName": "INNOVA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd75d399f68437cba3ed",
                    "vehicleName": "INNOVA CRYSTA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd81d399f68437cba3f0",
                    "vehicleName": "INNOVA HYCROSS",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd99d399f68437cba3f3",
                    "vehicleName": "TOYOTA FURTUNER (LUXURY VEHICLE )",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfda6d399f68437cba3f6",
                    "vehicleName": "TEMPO TRAVELLER",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "691585457e2398151654978b",
            "category": "LOCAL PACKAGE",
            "id": "LOCAL_PACKAGE",
            "vehicleNames": [
                {
                    "_id": "6915a72ae51337b994b41a4a",
                    "vehicleName": "Hatchback",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a735e51337b994b41a4e",
                    "vehicleName": "Sedan",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a73de51337b994b41a52",
                    "vehicleName": "Prime Sedan",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a74ee51337b994b41a56",
                    "vehicleName": "SUV ERTIGA",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a755e51337b994b41a5a",
                    "vehicleName": "INNOVA",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a75ee51337b994b41a5e",
                    "vehicleName": "INNOVA CRYSTA",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a76ee51337b994b41a62",
                    "vehicleName": "TEMPO TRAVELLER",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "6915855d7e2398151654978d",
            "category": "LUXURY CARS",
            "id": "LUXURY_CARS",
            "vehicleNames": [
                {
                    "_id": "6915a5a7e51337b994b419f0",
                    "vehicleName": "Toyota Fortuner Legender",
                    "categoryId": "LUXURY_CARS",
                    "__v": 0
                },
                {
                    "_id": "6915a5b4e51337b994b419f4",
                    "vehicleName": "BMW",
                    "categoryId": "LUXURY_CARS",
                    "__v": 0
                },
                {
                    "_id": "6915a5bee51337b994b419f8",
                    "vehicleName": "Audi",
                    "categoryId": "LUXURY_CARS",
                    "__v": 0
                },
                {
                    "_id": "6915a5fde51337b994b41a02",
                    "vehicleName": "Mercedes Benz",
                    "categoryId": "LUXURY_CARS",
                    "__v": 0
                }
            ],
            "__v": 0
        }
    ]
















    const value = {

        rupees,
        categoriesList,
        vehicleList,
        backendUrl, token, setToken,
        userDetails, navigate, getUserProfile,
        pickupTimeList, monthsList, adminPhoneNumber1, adminPhoneNumber2, adminPhoneNumber3, getAllVehicles
        , vehiclesNames, adminEmail1, adminEmail2, categories
    }

    return <MainContext.Provider value={value}>

        {props.children}

    </MainContext.Provider>

}