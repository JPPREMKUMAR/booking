
import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import {
    instagram, facebook, twitter, linkedIn
} from "../assets/assets"

const ContactWithUs = () => {

    const { adminPhoneNumber } = useContext(MainContext)

    return (
        <section className="px-5 py-5 w-full my-10">

            <div className="my-3 sm:w-[50%]">
                <h1 className="text-xl font-bold my-1">📞 Contact With Us</h1>
                <p className="text-md font-semibold text-gray-700 my-1">Looking for a reliable cab booking service in Bengaluru?
                    We’re here 24/7 to assist you with airport transfers, city rides, and outstation trips.</p>



                <div className="my-2">
                    <h1 className="text-xl font-bold text-black my-1">📍 Visit Us:</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">CabBooking Pvt. Ltd.</p>
                    <p className="text-md font-semibold text-gray-700 my-1">123, MG Road, Bengaluru, Karnataka – 560001</p>
                </div>



                <div className="my-2">
                    <h1 className="text-xl font-bold text-black my-1">📱 Call Us: {adminPhoneNumber}</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">(Our support team is available round the clock for all your cab booking needs in Bengaluru.)</p>
                </div>

                <div className="my-2">
                    <h1 className="text-xl font-bold text-black my-1">✉️ Email Us:</h1>
                    <p className="text-md font-semibold text-gray-700 my-1" >sample@gmail.com</p>

                    <p className="text-md font-semibold text-gray-700 my-1">(Write to us for bookings, feedback, or partnership inquiries.)</p>
                </div>


                <div className="my-2">
                    <h1 className="text-xl font-bold text-black my-1">🌐 Follow Us:</h1>
                    <div className="flex items-center gap-x-3 px-3">


                        <div className="my-3 flex items-center gap-x-3">
                            <a className="text-md font-semibold text-gray-700 my-1 flex gap-1 items-center" href="https://www.facebook.com/" target="_blank">
                                <img src={facebook} alt="Facebook" className="w-5 h-5" />
                                {/*/ 
                            <p>Facebook</p>
                            /*/
                                }


                            </a>

                        </div>
                        <div className="my-3 flex items-center gap-x-3">
                            <a className="text-md font-semibold text-gray-700 my-1 flex gap-1 items-center" href="http://linkedin.com/" target="_blank">
                                <img src={linkedIn} alt="linkedIn" className="w-5 h-5" />
                                {/*/ 
                            <p>Facebook</p>
                            /*/
                                }


                            </a>

                        </div>
                        <div className="my-3 flex items-center gap-x-3">
                            <a className="text-md font-semibold text-gray-700 my-1 flex gap-1 items-center" href="https://www.instagram.com/" target="_blank">
                                <img src={instagram} alt="Instagram" className="w-5 h-5" />
                                {/*/ 
                            <p>Facebook</p>
                            /*/
                                }


                            </a>

                        </div>
                        <div className="my-3 flex items-center gap-x-3">
                            <a className="text-md font-semibold text-gray-700 my-1 flex gap-1 items-center" href="https://x.com/" target="_blank">
                                <img src={twitter} alt="Twitter" className="w-5 h-5" />
                                {/*/ 
                            <p>Facebook</p>
                            /*/
                                }

                            </a>

                        </div>


                    </div>

                </div>



            </div>

        </section>
    )
}



export default ContactWithUs