import { createContext } from "react";
import { useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"


export const MainContext = createContext();




export const MainContextProvider = (props) => {
    const rupees = 10


    const categoriesList = [
        { id: uuid(), name: "AIRPORT TAXI" },
        { id: uuid(), name: "INNOVA TAXI" },
        { id: uuid(), name: "OUTSTATION TAXI" },
        { id: uuid(), name: "LOCAL PACKAGE" },

    ]

    const value = {

        rupees,
        categoriesList,

    }

    return <MainContext.Provider value={value}>

        {props.children}

    </MainContext.Provider>

}