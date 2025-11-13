import { useContext } from "react"
import { whatsapp, telephone } from "../assets/assets"
import { MainContext } from "../context/MainContext"




const Footer = () => {

    const { adminPhoneNumber1 } = useContext(MainContext)
    console.log(adminPhoneNumber1)

    return (

        <div className="w-full fixed bottom-10 ">

            <div className="flex justify-between items-center w-[100%] sm:h-25">
                <a href={`https://wa.me/91${adminPhoneNumber1}`} target="_blank"
                    className="mx-5"
                >
                    <img src={whatsapp} alt="whatsapp" className="w-15 h-15 sm:hover:w-20 sm:hover:h-20" />
                </a>

                <a href={`tel:+91${adminPhoneNumber1}`} className="mx-5">
                    <img src={telephone} alt="telephone" className="w-15 h-15  sm:hover:w-20 sm:hover:h-20" />
                </a>
            </div>
        </div>
    )
}


export default Footer