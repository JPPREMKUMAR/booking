

import { createContext, useEffect, useState } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"


export const MainContext = createContext({})




const MainContextProvider = (props) => {



    const backendUrl = import.meta.env.VITE_BACKEND_URL
    // console.log(backendUrl)
    const [token, setToken] = useState(Cookies.get("token") === undefined ? '' : Cookies.get("token"))




    useEffect(() => {

        const newToken = Cookies.get("token")
        setToken(newToken)
    }, [token])


    const navigate = useNavigate()


    useEffect(() => {
        if (token === "" || token === undefined) {
            navigate("/login")
        }
    }, [])



    const categoriesList = [
        { id: "AIRPORT_TAXI", name: "AIRPORT TAXI" },
        { id: "INNOVA_TAXI", name: "INNOVA TAXI" },
        { id: "OUTSTATION_TAXI", name: "OUTSTATION TAXI" },
        { id: "LOCAL_PACKAGE", name: "LOCAL PACKAGE" },

    ]



    const value = {
        backendUrl, token, setToken, navigate, categoriesList
    }



    return (
        <MainContext.Provider value={value}  >

            {props.children}
        </MainContext.Provider>
    )
}




export default MainContextProvider