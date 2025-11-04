
import { useState } from "react"

const Login = () => {


    const [adminEmail, setAdminEmail] = useState('')
    const [adminPassword, setAdminPassword] = useState('')


    const onSubmitHandler = async (event) => {

        event.preventDefault()

        console.log(adminEmail, adminPassword)
    }

    return (

        <div className="min-h-screen flex  justify-center bg-gray-300 px-2  sm:flex-col sm:items-center">


            <div className="my-10 bg-white shadow-md rounded-sm px-2 w-full h-[50%] sm:w-1/2 sm:px-10 ">
                <form className="px-5 py-5 my-5" onSubmit={onSubmitHandler}>

                    <h1 className="text-gray-600 font-bold text-xl sm:text-2xl text-center">Admin Login</h1>

                    <div className="flex  flex-col gap-y-2 my-5">

                        <label htmlFor="email" className="text-gray-700 text-md font-semibold">Admin Email Address</label>
                        <div className="border px-2 py-2 rounded-sm">
                            <input id="email" type="email" placeholder="Enter Your Admin Email" className="outline-none w-full px-2" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} required />
                        </div>
                    </div>

                    <div className="flex  flex-col gap-y-2 my-5">

                        <label htmlFor="password" className="text-gray-700 text-md font-semibold">Admin Password </label>
                        <div className="border px-2 py-2 rounded-sm">
                            <input id="password" type="password" placeholder="Enter Your Admin Password" className="outline-none w-full px-2" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} required />
                        </div>
                    </div>
                    <div className="flex justify-center my-10">

                        <button type="submit" className="bg-blue-500 text-white outline-none rounded-md px-10 py-2 text-md font-semibold">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login