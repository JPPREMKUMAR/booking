import { useState } from 'react'



const Booking = () => {


    const [pickup, setPickup] = useState('')
    const [drop, setDrop] = useState('')
    const [distance, setDistance] = useState('')
    const [isLoading, setIsLoading] = useState(false)



    return (
        <div>
            <h1>Booking</h1>
            <form className="p-10 ">
                <div className="flex flex-col gap-2">
                    <label htmlFor="pickup">PickUp Location</label>
                    <div className="border border-2 border-gray-300 w-100 p-2 flex flex-col">
                        <input id="pickup" className="outline-none w-full text-gray-900" placeholder="Enter Pickup Location" />
                    </div>

                </div>

            </form>
        </div>
    )
}


export default Booking