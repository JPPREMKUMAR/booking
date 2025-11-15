import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { MainContext } from "../context/MainContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { TailSpin } from "react-loader-spinner"



const Register = () => {

    const { backendUrl, token, setToken } = useContext(MainContext)
    //console.log(backendUrl)
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorNumber, setErrorNumber] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoader, setIsLoader] = useState(false)

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        setIsLoader(true)
        if (mobile.length !== 10) {
            return setErrorNumber("Mobile Number must be 10 Digits "), setIsLoader(false)
        }

        if (password !== confirmPassword) {
            return setErrorPassword("Password is not Matched."), setIsLoader(false)
        }

        const response = await axios.post(backendUrl + "/api/user/register", {
            name,
            mobile,
            email,
            password
        })
        console.log(response)

        if (response.data.success === true) {
            navigate("/")
            const { token } = response.data
            console.log(token)
            Cookies.set("token", token, { expires: 30 })
            setToken(token)
            //setIsLoader(false)

            setErrorNumber('')
            setErrorPassword('')
            setError('')
        } else {
            setErrorNumber('')
            setErrorPassword('')
            const { message } = response.data
            setError(message)
            setIsLoader(false)
        }


    }


    useEffect(() => {
        console.log('token Set')
    }, [token])


    useEffect(() => {
        if (token !== '') {
            navigate('/')
        }
    })

    return (
        <div className="px-5 py-2">

            <h3 className="px-3 text-2xl font-bold">Register</h3>

            <div>
                {
                    isLoader ? <div className="flex justify-center">
                        <TailSpin width={50} height={50} color="blue" />
                    </div> : <form className="my-3 px-3" onSubmit={onSubmitHandler} >
                        <div className='my-1'>
                            <label htmlFor="name" className='text-xl font-semibold'>Name</label>
                            <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                <input type="text" id="name" placeholder="Enter Your Full Name" className='w-full outline-none font-bold' value={name} onChange={(event) => setName(event.target.value)} required />
                            </div>
                        </div>
                        <div className='my-1'>
                            <label htmlFor="phone" className='text-xl font-semibold'>Phone</label>
                            <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                <input type="number" id="phone" placeholder="Enter 10  Digit Number" className='w-full outline-none font-bold' value={mobile} onChange={(event) => setMobile(event.target.value)} required />
                            </div>
                            {
                                errorNumber.length > 0 && <p className="text-red-600 text-md">{errorNumber}</p>
                            }

                        </div>

                        <div className='my-1'>
                            <label htmlFor="email" className='text-xl font-semibold'>Email</label>
                            <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                <input type="email" id="email" placeholder="Enter Your Email Address" className='w-full outline-none font-bold' value={email} onChange={(event) => setEmail(event.target.value)} required />
                            </div>
                        </div>
                        <div className='my-1'>
                            <label htmlFor="password" className='text-xl font-semibold'>Password</label>
                            <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                <input type="password" id="password" placeholder="Enter Your Password" className='w-full outline-none font-bold' value={password} onChange={(event) => setPassword(event.target.value)} required />
                            </div>
                        </div>
                        <div className='my-1'>
                            <label htmlFor="password1" className='text-xl font-semibold'>Confirm Password</label>
                            <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                <input type="password" id="password1" placeholder="Enter Your Confirm Password" className='w-full outline-none font-bold' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
                            </div>
                        </div>
                        {
                            errorPassword.length > 0 && <p className="text-red-600 text-md">{errorPassword}</p>
                        }

                        <div className="flex justify-center my-4">
                            <button type="submit" className="bg-blue-600 px-10  py-3 font-bold rounded-md outline cursor-pointer text-white">Register</button>
                        </div>
                        <div className="flex gap-x-3 items-center text-md">
                            <p>Already have an account?</p>
                            <Link to="/login" className="text-blue-600 text-semibold">Login</Link>
                        </div>
                        {
                            error.length > 0 && <p className="text-red-600 text-md font-semibold">{error}</p>
                        }
                    </form>
                }
            </div>


        </div>
    )
}


export default Register