import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import { MainContext } from "../context/MainContext"


const MyProfile = () => {
    const { userDetails, getUserProfile } = useContext(MainContext)

    console.log(userDetails)
    const { name, mobile, email } = userDetails

    useEffect(() => {
        getUserProfile()
    }, [])

    return (
        <div className="px-3">
            <div className="my-3">
                <h1 className="text-2xl font-semibold  text-center">MyProfile</h1>
                <div className="flex items-center justify-center gap-x-3 text-md font-bold my-3">
                    <Link to="/" className="cursor-pointer">Home</Link>
                    <h1>/
                        My Profile</h1>
                </div>
            </div>
            <div className="bg-white shadow-md px-5 py-5 mx-4 ">
                <div className="flex flex-col gap-y-2 my-2">
                    <h1 className="text-xl font-semibold">Name</h1>
                    <p className="text-sm text-gray-600 font-bold">{name}</p>
                </div>
                <div className="flex flex-col gap-y-2 my-2">
                    <h1 className="text-xl font-semibold">Mobile</h1>
                    <p className="text-sm text-gray-600 font-bold">{mobile}</p>
                </div>
                <div className="flex flex-col gap-y-2 my-2">
                    <h1 className="text-xl font-semibold">Email</h1>
                    <p className="text-sm text-gray-600 font-bold">{email}</p>
                </div>
            </div>
        </div>
    )
}


export default MyProfile