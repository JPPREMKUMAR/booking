
import VehicleList from "../components/VehicleList"
import WhyBookWithUs from "../components/WhyBookWithUs"
import ContactWithUs from "../components/ContactWithUs"
import BookingCard from "../components/BookingCard"
import ContactDetails from "../components/ContactDetails"
import Carousel from "../components/Carousel"
import { MainContext } from "../context/MainContext"
import { useContext, useState, useEffect } from "react"
import axios from "axios"
import { TailSpin } from "react-loader-spinner"




const Home = () => {

    const { backendUrl, token } = useContext(MainContext)

    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getCategories = async () => {

        console.log("Hello")
        const response = await axios.post(backendUrl + "/api/user/getCategories", {})

        // console.log(response.data.categories)

        setCategories(response.data.categories)

        setIsLoading(false)


    }


    useEffect(() => {
        getCategories()
    }, [])








    return (
        <div className="px-2 my-5">

            <Carousel />

            <BookingCard />
            {isLoading ? <div className="flex justify-center my-5 min-h-screen">
                <TailSpin width={50} height={50} color="blue" />
            </div> :
                <div>
                    {
                        categories.map((item, index) => (
                            <VehicleList item={item} key={index} />

                        ))
                    }
                </div>

            }










        </div>
    )
}


export default Home