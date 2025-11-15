import { useState, useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { TailSpin } from "react-loader-spinner"
import { MainContext } from "../context/MainContext"
import axios from "axios"

const Thankyou = () => {
    const { backendUrl, token, navigate } = useContext(MainContext)

    const [isLoader, setIsLoader] = useState(true)



    const params = useParams()
    console.log(params)

    const { bookingId } = params
    console.log(bookingId)


    useEffect(() => {


        setIsLoader(false)

    }, [])



    return (
        <div className="px-3 ">
            <div className="my-3">
                <h3 className="text-2xl font-semibold  text-center sm:text-4xl">Thank You</h3>
                <div className="flex items-center justify-center gap-x-3 text-md font-bold my-3 sm:text-3xl">
                    <Link to="/" className="cursor-pointer">Home</Link>
                    <h1>/
                        Thankyou</h1>
                </div>
            </div>
            <div>
                {
                    isLoader ? <div className="flex flex-col items-center justify-center h-40">
                        <TailSpin width={50} heigth={50} color="blue" />

                    </div> : <div className="bg-white shadow-md px-8 py-5 mx-4 sm:mx-10 sm:my-10 sm:px-10 py-10 ">

                        <h1 className="text-center text-2xl text-gray-600 font-semibold">
                            Thank you for your Booking.
                        </h1>

                        <div className="my-3">
                            <h1 className="text-xl text-gray-600  text-center font-semibold ">Your Booking ID <span className="font-bold text-black">{bookingId}</span> is comfirmed.  </h1>
                        </div>

                        <div className="my-2">

                            <h1 className="text-xl text-gray-600 text-center font-semibold">
                                The Booking details have been sent to your Email ID and Phone.
                            </h1>
                        </div>

                    </div>
                }
            </div>

        </div>
    )
}



export default Thankyou