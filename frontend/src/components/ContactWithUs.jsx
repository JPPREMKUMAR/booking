
import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import {
    instagram, facebook, twitter, linkedIn,
    gmail
} from "../assets/assets"
import { Link } from "react-router-dom"

const ContactWithUs = () => {

    const { adminPhoneNumber } = useContext(MainContext)

    return (
        <section className=" px-5 py-5 w-full text-gray-50 mx-2 shadow-xl rounded-md">

            <div className="my-3 sm:w-[50%]">
                <h1 className="text-xl font-bold my-1 text-[#007BFF]">📞 Contact With Us</h1>
                <p className="text-md font-semibold text-gray-700 my-1">Looking for a reliable cab booking service in Bengaluru?
                    We’re here 24/7 to assist you with airport transfers, city rides, and outstation trips.</p>



                <div className="my-2">
                    <h1 className="text-xl font-bold  my-1 text-[#007BFF]">📍 Visit Us:</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">CabBooking Pvt. Ltd.</p>
                    <p className="text-md font-semibold text-gray-700 my-1">123, <br />
                        MG Road, <br /> Bengaluru, <br /> Karnataka – 560001</p>
                </div>



                <div className="my-2">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">📱 24/7 Call Us</h1>
                    <p className="text-md font-semibold text-gray-700 my-1 flex gap-x-3">
                        <a href={`tel:+916303845985`} className=" hover:text-[#007BFF]" >6303845985</a>
                        <a href={`tel:+916303845985`} className=" hover:text-[#007BFF]" >6303845985</a>
                        <a href={`tel:+916303845985`} className=" hover:text-[#007BFF]" >6303845985</a>
                    </p>
                    <p className="text-md font-semibold text-gray-700 my-1">(Our support team is available round the clock for all your cab booking needs in Bengaluru.)</p>
                </div>

                <div className="my-2">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">✉️ Email Us:</h1>
                    <p className="text-md font-semibold text-gray-700 my-1" >sample@gmail.com</p>

                    <p className="text-md font-semibold text-gray-700 my-1">(Write to us for bookings, feedback, or partnership inquiries.)</p>
                </div>


                <div className="my-2">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">🌐 Follow Us:</h1>
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


                        <div className="my-3 flex items-center gap-x-3">
                            <a className="text-md font-semibold text-gray-700 my-1 flex gap-1 items-center" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSRLWmpSQnWFhtzSWVxBBfxNfNjxkHBQXPjrHvxNnbMmtGmjLMtNgGrMBrbGtngcXwZDz" target="_blank">
                                <img src={gmail} alt="Gmail" className="w-5 h-5" />
                                {/*/ 
                            <p>Facebook</p>
                            /*/
                                }

                            </a>

                        </div>


                    </div>

                </div>




            </div>

            <div className="my-10 flex items-center flex-col text-center py-4  text-md font-semibold text-gray-700">
                <p className="">

                    <Link to="/aboutUs" className="cursor-pointer text-gray-700 hover:text-blue-500  mx-3 my-1">About</Link>
                    <Link to="/contactUs" className="cursor-pointer text-gray-700 hover:text-blue-500  mx-3 my-1">Contact</Link>
                    <Link to="/policy" className="cursor-pointer text-gray-700 hover:text-blue-500  mx-3 my-1">Policy</Link>
                    <Link to="/services" className="cursor-pointer text-gray-700 hover:text-blue-500  mx-3 my-1">Services</Link>


                </p>
                <p className="my-3 self-center">
                    © {new Date().getFullYear()} CabBooking. All Rights Reserved.
                </p>

            </div>


        </section>
    )
}



export default ContactWithUs