import { useContext, useState, useEffect } from 'react'
import { MainContext } from "../context/MainContext"
import axios from "axios"
import { TailSpin } from "react-loader-spinner"


const AddItem = () => {


    const { backendUrl, token, navigate, } = useContext(MainContext)



    const [categoriesList, setCategoriesList] = useState([])
    const [vehiclesNames, setVehiclesNames] = useState([])
    const [vehicle, setVahicle] = useState('')
    const [bookingType, setBookingType] = useState('')
    const [bookingTypeId, setBookingTypeId] = useState('AIRPORT_TAXI')
    const [price, setPrice] = useState('')
    const [capacity, setCapacity] = useState('')
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [mainLoading, setMainLoading] = useState(true)

    const [message, setMessage] = useState('')


    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setImage(file)

        //Set Preview 
        const reader = new FileReader()
        reader.onloadend = () => {
            setPreview(reader.result)

        }
        reader.readAsDataURL(file)

    }


    const onSubmitHandler = async (event) => {
        setIsLoading(true)
        event.preventDefault()
        const getId = categoriesList.find((item) => item.category === bookingType);
        //console.log(getId.id);
        const bookingTypeId = getId.id;

        console.log(vehicle, bookingType, price, capacity, image)

        const formData = new FormData()

        formData.append("image", image)
        formData.append("vehicle", vehicle)
        formData.append("bookingType", bookingType)
        formData.append("price", price)
        formData.append("capacity", capacity)
        formData.append("bookingTypeId", bookingTypeId)

        const response = await axios.post(backendUrl + "/api/vehicle/addItem", formData, { headers: { token } })
        console.log(response)
        if (response.data.success === true) {
            setIsLoading(false)
            setMessage(response.data.message)
            setVahicle('')
            setBookingType(categoriesList[0].category)
            setPrice('')
            setCapacity()
            setImage(null)
            setPreview('')
            navigate("/allVehicles")

        } else {
            setIsLoading(false)
            setMessage("Please Try Again.")
        }
    }

    useEffect(() => {
        if (token === undefined || token === '') {
            navigate("/login")
        }

    }, [])


    const getCategoriesList = async () => {
        const response = await axios.post(backendUrl + "/api/categories/getCategories", {}, { headers: { token } })
        //console.log(response.data.categories)

        setCategoriesList(response.data.categories)


    }


    const getVehiclesList = async () => {

        // console.log(bookingTypeId)


        const response = await axios.post(backendUrl + `/api/categories/getVNames/${bookingTypeId}`, {}, { headers: { token } })
        console.log(response.data.vehicleNames)

        setVehiclesNames(response.data.vehicleNames)
        setMainLoading(false)

    }



    useEffect(() => {
        getCategoriesList()
        getVehiclesList()

    }, [])




    useEffect(() => {
        getVehiclesList()
    }, [bookingTypeId])



    const onChangeCategory = (e) => {
        console.log(e.target.value)
        setBookingType(e.target.value)

        const item = categoriesList.find((item) => item.category === e.target.value)
        setBookingTypeId(item.id)

    }


    return (
        <div className='bg-gray-300 px-5 py-5 min-h-screen w-full sm:px-20 sm:py-20'>

            {
                mainLoading ? <div className='flex justify-center'>

                    <TailSpin width={50} height={50} color="blue" />


                </div> :
                    <div className='my-5  bg-white px-4 py-8 rounded-md'>
                        <h1 className='text-xl font-semibold text-center'>Add New Vehicle</h1>
                        <form className='my-5 sm:p-5 grid grid-cols-1  gap-4 ' onSubmit={onSubmitHandler}>


                            <div>
                                <label htmlFor="bookingType" className="text-md text-gray-700 font-bold">Booking Type</label>
                                <div className='border rounded-sm my-1'>
                                    <select id="bookingType" className='w-full px-3 py-2 outline-none  font-semibold' value={bookingType} onChange={onChangeCategory}>
                                        {
                                            categoriesList.map((item) => (
                                                <option key={item.id}>{item.category}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>




                            <div>
                                <label htmlFor="vehicle" className="text-md text-gray-700 font-bold">Vehicle Name</label>
                                <div className='border rounded-sm my-1'>
                                    <select id="bookingType" className='w-full px-3 py-2 outline-none  font-semibold' value={vehicle} onChange={(e) => setVahicle(e.target.value)}>
                                        {
                                            vehiclesNames.map((item, index) => (
                                                <option key={index}>{item.vehicleName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>



                            <div>
                                <label htmlFor="price" className="text-md text-gray-700 font-bold">Price</label>
                                <div className='border rounded-sm my-1'>
                                    <input id="price" placeholder='Enter Price' className='px-3 py-2 outline-none font-semibold' value={price} onChange={(e) => setPrice(e.target.value)} required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="capacity" className="text-md text-gray-700 font-bold">Capacity</label>
                                <div className='border rounded-sm my-1'>
                                    <input id="capacity" placeholder='Enter the Capacity' className='px-3 py-2 outline-none font-semibold' value={capacity} onChange={(e) => setCapacity(e.target.value)} required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="image" className="text-md text-gray-700 font-bold">Image</label>
                                <div className='border rounded-sm my-1'>
                                    <input type="file" accept="image/*" id="image" className='px-3 py-2 outline-none font-semibold' onChange={handleImageChange} required />
                                </div>
                                <div className='my-5'>
                                    {
                                        preview !== '' && <img src={preview} alt="preview" className='w-full h-full' />
                                    }
                                </div>
                            </div>

                            <div className='flex justify-center my-3'>

                                {
                                    isLoading ? <div>
                                        <TailSpin width={50} height={50} color="blue" />

                                    </div>
                                        : <button type="submit" className="text-white bg-blue-600 rounded-md px-5 py-2 font-semibold ">
                                            Add New Vehicle
                                        </button>
                                }
                            </div>

                            {
                                message !== '' && <p className='text-md text-center font-bold text-red-600'>{message}</p>
                            }
                        </form>

                    </div>

            }



        </div>
    )
}


export default AddItem