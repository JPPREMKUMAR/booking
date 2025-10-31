import { useState, useContext, useEffect } from 'react'
import { MainContext } from '../context/MainContext'
import axios from "axios"
import { TailSpin } from "react-loader-spinner"

const Booking = () => {

    const { categoriesList, vehicleList, userDetails, getUserProfile, backendUrl, navigate, pickupTimeList, monthsList, token } = useContext(MainContext)
    //console.log(categoriesList)

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [bookingType, setBookingType] = useState(categoriesList[0].name)
    const [vehicle, setVehicle] = useState(vehicleList[0].vehicleName)
    const [pickUpPoint, setPickUpPoint] = useState('')
    const [dropPoint, setDropPoint] = useState('')
    const [cityActive, setCityActive] = useState('City To Airport')
    const [pickUpTime, setpickUpTime] = useState(pickupTimeList[0])
    const [minDate, setMinDate] = useState('')
    const [pickUpDate, setPickUpDate] = useState('')

    const [isLoader, setIsLoader] = useState(false)




    const onSubmitHandler = async (event) => {
        setIsLoader(true)
        event.preventDefault()
        //console.log("Book Now Button Clicked")
        //console.log(name, mobile, email, bookingType, vehicle, pickUpPoint, dropPoint, pickUpTime, pickUpDate)
        const convertPickUpdate = new Date(pickUpDate)


        const day = convertPickUpdate.getDate()
        const month = convertPickUpdate.getMonth()
        const year = convertPickUpdate.getFullYear()
        const monthName = monthsList[month]
        //console.log(monthName)
        //console.log(day, month, year)
        // console.log(day)
        const newPresentDateString = `${day}-${monthName}-${year}`
        // console.log(newPresentDateString)

        //console.log(pickUpTime)
        const pickUpTimeString = pickUpTime['time']
        //console.log(pickUpTimeString)

        if (token === undefined || token === '') {
            navigate("/login")
        }


        const response = await axios.post(backendUrl + "/api/book/booking", {
            name,
            mobile,
            email,
            bookingType,
            vehicle,
            pickUpPoint,
            dropPoint,
            pickUpTime: pickUpTimeString,
            pickUpDate: newPresentDateString
        }, { headers: { token: token } })
        console.log(response.data)
        if (response.data.success === true) {
            const { bookingId } = response.data.bookingDetails

            const thankyouUrl = `/thankyou/${bookingId}`
            navigate(thankyouUrl)
            setIsLoader(false)
        }
        setIsLoader(false)

    }

    useEffect(() => {
        getUserProfile()

    }, [])
    useEffect(() => {
        //console.log(userDetails.name)
        //console.log(userDetails.mobile)
        //console.log(userDetails.email)
        // console.log(userDetails)
        if (userDetails !== undefined) {

            if (userDetails.name !== undefined && userDetails.mobile !== undefined && userDetails.email !== undefined) {

                setName(userDetails.name)
                setMobile(userDetails.mobile)
                setEmail(userDetails.email)
            }

        }


    }, [userDetails])

    useEffect(() => {

        if (cityActive === 'City To Airport') {
            setDropPoint("Bengaluru International Airport")
            setPickUpPoint("")
        } else {
            setPickUpPoint("Bengaluru International Airport")
            setDropPoint("")
        }
    }, [cityActive])

    useEffect(() => {

        const todayDate = new Date()
        // console.log(todayDate)
        //Date Month Year
        const day = todayDate.getDate()
        const month = todayDate.getMonth()
        const year = todayDate.getFullYear()
        const monthName = monthsList[month]
        //console.log(monthName)
        //console.log(day, month, year)
        // console.log(day)
        // const newPresentDateString = `${day}-${monthName}-${year}`
        //console.log(newPresentDateString)
        if (month + 1 < 9) {
            if (day < 9) {
                const presentDateValue = `${year}-0${month + 1}-0${day}`
                console.log(presentDateValue)
                setPickUpDate(presentDateValue)
                setMinDate(presentDateValue)

            } else {
                const presentDateValue = `${year}-${month + 1}-${day}`
                console.log(presentDateValue)
                setPickUpDate(presentDateValue)
                setMinDate(presentDateValue)

            }


        } else {
            if (day < 9) {
                const presentDateValue = `${year}-${month + 1}-0${day}`
                console.log(presentDateValue)
                setPickUpDate(presentDateValue)
                setMinDate(presentDateValue)

            } else {
                const presentDateValue = `${year}-${month + 1}-${day}`
                console.log(presentDateValue)
                setPickUpDate(presentDateValue)
                setMinDate(presentDateValue)

            }


        }



    }, [])




    return (
        <div className='px-5 py-2 sm:flex sm:items-center sm:justify-center w-full'>

            <div className='w-full sm:flex sm:justify-center '>

                {
                    isLoader ? <div className='flex items-center justify-center'>
                        <TailSpin width={50} heigth={50} color='blue' />
                    </div> :
                        <div className="px-4 py-3 border border-gray-700 rounded-md sm:w-1/2 sm:py-5 my-5">
                            <h1 className='text-3xl text-center font-bold '>Contact & Pick Up Details </h1>

                            <form className="my-3 px-3  sm:w-[3/4]" onSubmit={onSubmitHandler}>
                                <div className='my-1'>
                                    <label htmlFor="name" className='text-xl font-semibold'>Name</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        <input type="text" id="name" placeholder="Enter Your Full Name" className='w-full outline-none font-bold' value={name} onChange={(event) => setName(event.target.value)} required />
                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="mobile" className='text-xl font-semibold'>Mobile</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        <input type="number" id="mobile" placeholder="Enter 10 Digit Number" className='w-full outline-none font-bold' value={mobile} onChange={(event) => setMobile(event.target.value)} required />
                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="email" className='text-xl font-semibold'>Email</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        <input type="email" id="email" placeholder="Enter Your Email Address" className='w-full outline-none font-bold' value={email} onChange={(event) => setEmail(event.target.value)} required />
                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="vehicleType" className='text-xl font-semibold'>Booking Type</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        <select className='w-full outline-none' id="vehicleType" defaultValue={bookingType} onChange={(event) => setBookingType(event.target.value)}>
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
                                        <select className='w-full outline-none' id="vehicle" defaultValue={vehicle} onChange={(event) => setVehicle(event.target.value)}  >
                                            {
                                                vehicleList.map((item) => (
                                                    <option key={item.id}>{item.vehicleName}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='my-4 flex flex-col gap-y-2'>

                                    <div className='flex gap-x-2 items-center text-md font-bold'>
                                        <input type="radio" id="cityToAirdport" name="city" value={`City To Airport`} onChange={(event) => setCityActive(event.target.value)} checked={cityActive === 'City To Airport' ? true : false} />
                                        <label htmlFor="cityToAirdport" >City To Airport</label>
                                    </div>
                                    <div className='flex gap-x-2 items-center text-md font-bold'>
                                        <input type="radio" id="AirdportToCity" name="city" value={`Airport To City`} onChange={(event) => setCityActive(event.target.value)} checked={cityActive === 'Airport To City' ? true : false} />
                                        <label htmlFor="AirdportToCity" >Airport To City</label>
                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="pickupPoint" className='text-xl font-semibold'>Pick Up Point</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        {
                                            cityActive === 'Airport To City' ? <p className='w-full outline-none font-bold'>Bengaluru International Airport</p> : <input type="text" id="pickupPoint" placeholder="Enter Your Pick Up Location" className='w-full outline-none font-bold' value={pickUpPoint} onChange={(event) => setPickUpPoint(event.target.value)} required />
                                        }

                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="dropPoint" className='text-xl font-semibold'>Drop Point</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        {
                                            cityActive === 'City To Airport' ? <p className='w-full outline-none font-bold'>Bengaluru International Airport</p> : <input type="text" id="dropPoint" placeholder="Enter Your Drop Location" className='w-full outline-none font-bold' value={dropPoint} onChange={(event) => setDropPoint(event.target.value)} required />
                                        }
                                    </div>
                                </div>


                                <div className='my-1'>
                                    <label htmlFor="date" className='text-xl font-semibold'>Pickup Date</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>

                                        <input type="date" id="date" className='w-full  outline-none font-bold ' min={minDate} value={pickUpDate} onChange={(event) => setPickUpDate(event.target.value)} required />
                                    </div>
                                </div>



                                <div className='my-1'>
                                    <label htmlFor="vehicleType" className='text-xl font-semibold'>Pickup Time</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2 overflow-y-scrool'>
                                        <select className='w-full outline-none overflow-auto' id="vehicleType" defaultValue={pickUpTime} onChange={(event) => setpickUpTime(event.target.value)}>
                                            {
                                                pickupTimeList.map((item) => (

                                                    <option key={item.id}>{item.time}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className='flex justify-center my-5'>

                                    <button type="submit" className='bg-blue-600 px-7 py-2 outline-none rounded-md text-white font-semibold'>Book Now</button>
                                </div>

                            </form>
                        </div>
                }

            </div>


        </div>
    )
}


export default Booking