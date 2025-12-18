import { useContext } from "react"
import { whatsapp, telephone } from "../assets/assets"
import { MainContext } from "../context/MainContext"




const Footer = () => {

    const { adminPhoneNumber1 } = useContext(MainContext)
    console.log(adminPhoneNumber1)

    return (

        <div className="w-full mx-5">
            <div className="w-[90%]  fixed bottom-10  flex items-center  ">


                <div className="sm:h-25 w-[15%]">
                    <a href={`https://wa.me/91${adminPhoneNumber1}`} target="_blank"
                        className="mx-5" aria-label="Chat on Whatsapp"
                    >
                        <img src={whatsapp} alt="whatsapp" className="w-10 h-10 sm:hover:w-20 sm:hover:h-20" />
                    </a>
                </div>
                <div className="sm:h-25 w-[70%]"></div>
                <div className="sm:h-25 w-[15%]">

                    <a href={`tel:+91${adminPhoneNumber1}`} className="mx-5" aria-label="Call Us">
                        <img src={telephone} alt="telephone" className="w-10 h-10  sm:hover:w-20 sm:hover:h-20" />
                    </a>
                </div>
            </div>

        </div>
    )
}


export default Footer