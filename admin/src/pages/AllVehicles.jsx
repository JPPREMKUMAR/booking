import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { TailSpin } from "react-loader-spinner"
import VehicleItem from "../components/VehicleItem"
import { MainContext } from "../context/MainContext"
import { Navigate } from "react-router-dom"



const AllVehicles = () => {


    const { backendUrl, token, navigate } = useContext(MainContext)

    const [isLoading, setIsLoading] = useState(true)
    const [vehicles, setVehicles] = useState([])


    const getAllVehicles = async () => {
        setIsLoading(true)

        const response = await axios.post(backendUrl + "/api/vehicle/allVehicles", {}, { headers: { token } })
        // console.log(response)
        if (response.data.success === true) {
            const getData = response.data.vehicles
            // console.log(getData)
            setVehicles(getData)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        if (token === undefined || token === '') {
            navigate("/login")
        }
        getAllVehicles()
        //console.log(vehicles)
    }, [])
    console.log(vehicles)

    return (
        <div className="bg-gray-200 min-h-screen px-5 py-5">
            <h1 className="text-center text-4xl text-[#d4af37] font-bold">All Vehicles</h1>

            <div className="my-10">
                {
                    isLoading ? <div className="flex justify-center">
                        <TailSpin width={50} height={50} color="blue" />


                    </div> : <div>

                        {
                            vehicles.length !== 0 ? <div className="grid grid-cols-1 sm:grid-cols-4   gap-4 sm:gap-7">
                                {
                                    vehicles.map((item, index) => (
                                        <VehicleItem item={item} key={index} getAllVehicles={getAllVehicles} />
                                    ))
                                }

                            </div> : <div className="flex flex-col justify-center items-center min-h-screen">
                                <h1 className="text-xl text-center sm:4xl font-bold">NO Vehicles Yet</h1>
                            </div>
                        }

                    </div>
                }

            </div>
        </div>
    )
}



export default AllVehicles