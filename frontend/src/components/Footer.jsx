import { useContext } from "react"
import { whatsapp, telephone } from "../assets/assets"
import { MainContext } from "../context/MainContext"




const Footer = () => {

    const { adminPhoneNumber } = useContext(MainContext)
    console.log(adminPhoneNumber)

    return (

        <div className="w-full fixed bottom-10   ">

            <div className="flex justify-between items-center w-[100%]">
                <a href={`https://wa.me/91${adminPhoneNumber}?text=Hello!%20Sir%20I%20want%20to%20book%20a%20cab.%0APickup%20Location:%20[Enter%20Pickup%20Location]%0ADrop%20Location:%20[Enter%20Drop%20Location]%0ADate%20&%20Time:%20[Preferred%20Time]`} target="_blank"
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