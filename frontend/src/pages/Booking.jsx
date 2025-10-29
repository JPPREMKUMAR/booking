import { useState, useContext } from 'react'
import { MainContext } from '../context/MainContext'



const Booking = () => {

    const { categoriesList, vehicleList } = useContext(MainContext)
    console.log(categoriesList)

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [bookingType, setBookingType] = useState(categoriesList[0].name)
    const [Vehicle, setVehicle] = useState(vehicleList[0].vehicleName)
    const [pickUpPoint, setPickUpPoint] = useState('')
    const [dropPoint, setDropPoint] = useState('')


    const onSubmitHandler = async (event) => {

        event.preventDefault()
        console.log("Book Now Button Clicked")
    }

    return (
        <div className='px-5 py-2'>

            <div className="px-4 py-3 border border-gray-700 rounded-md">
                <h1 className='text-3xl text-center font-bold '>Contact & Pick Up Details </h1>

                <form className="my-3 px-3" onSubmit={onSubmitHandler}>
                    <div className='my-1'>
                        <label htmlFor="name" className='text-xl font-semibold'>Name</label>
                        <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                            <input type="text" id="name" placeholder="Enter Your Full Name" className='w-full outline-none font-bold' />
                        </div>
                    </div>
                    <div className='my-1'>
                        <label htmlFor="mobile" className='text-xl font-semibold'>Mobile</label>
                        <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                            <input type="number" id="mobile" placeholder="Enter 10 Digit Number" className='w-full outline-none font-bold' />
                        </div>
                    </div>
                    <div className='my-1'>
                        <label htmlFor="email" className='text-xl font-semibold'>Email</label>
                        <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                            <input type="email" id="email" placeholder="Enter Your Email Address" className='w-full outline-none font-bold' />
                        </div>
                    </div>
                    <div className='my-1'>
                        <label htmlFor="vehicleType" className='text-xl font-semibold'>Booking Type</label>
                        <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                            <select className='w-full outline-none' id="vehicleType">
                                {
                                    categoriesList.map((item) => (

                                        <option key={item.id}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='my-1'>
                        <label htmlFor="vehicle" className='text-xl font-semibold'>Vehicle</label>
                        <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                            <select className='w-full outline-none' id="vehicle">
                                {
                                    vehicleList.map((item) => (
                                        <option key={item.id}>{item.vehicleName}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='my-1'>
                        <label htmlFor="pickupPoint" className='text-xl font-semibold'>Pick Up Point</label>
                        <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                            <input type="text" id="pickupPoint" placeholder="Enter Your Pick Up Location" className='w-full outline-none font-bold' />
                        </div>
                    </div>
                    <div className='my-1'>
                        <label htmlFor="dropPoint" className='text-xl font-semibold'>Drop Point</label>
                        <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                            <input type="text" id="dropPoint" placeholder="Enter Your Drop Location" className='w-full outline-none font-bold' />
                        </div>
                    </div>
                    <div className='flex justify-center my-5'>

                        <button type="submit" className='bg-blue-600 px-7 py-2 outline-none rounded-md text-white font-semibold'>Book Now</button>
                    </div>

                </form>
            </div>

        </div>
    )
}


export default Booking