import { useContext } from "react"
import { MainContext } from "../context/MainContext"


const TypeOfVehicle = () => {


    const { categoriesList } = useContext(MainContext)
    console.log(categoriesList)

    return (

        <div>

            <h1>

                Type of Vehicle
            </h1>
        </div>
    )
}



export default TypeOfVehicle