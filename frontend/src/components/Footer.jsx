import { useContext } from "react"
import { whatsapp, telephone } from "../assets/assets"
import { MainContext } from "../context/MainContext"




const Footer = () => {

    const { adminPhoneNumber } = useContext(MainContext)
    console.log(adminPhoneNumber)

    return (

        <div className="w-full fixed bottom-10   ">

            <div className="flex justify-between items-center w-[100%]">
                <a href={`https://wa.me/91${adminPhoneNumber}`} target="_blank"
                    className="mx-5"
                >
                    <img src={whatsapp} alt="whatsapp" className="w-10 h-10" />
                </a>

                <a href={`tel:+91${adminPhoneNumber}`} className="mx-5">
                    <img src={telephone} alt="telephone" className="w-10 h-10" />
                </a>
            </div>
        </div>
    )
}


export default Footer