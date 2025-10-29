import { Link } from "react-router-dom"

const Login = () => {

    return (
        <div className="px-5 py-2">

            <h1 className="px-3 text-2xl font-bold">Login</h1>
            <form className="my-3 px-3" >

                <div className='my-1'>
                    <label htmlFor="email" className='text-xl font-semibold'>Email</label>
                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                        <input type="email" id="email" placeholder="Enter Your Email Address" className='w-full outline-none font-bold' />
                    </div>
                </div>


                <div className='my-1'>
                    <label htmlFor="password" className='text-xl font-semibold'>Email</label>
                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                        <input type="password" id="password" placeholder="Enter Your Password" className='w-full outline-none font-bold' />
                    </div>
                </div>

                <div className="flex justify-center my-4">
                    <button type="submit" className="bg-blue-600 px-10  py-3 font-bold rounded-md outline cursor-pointer text-white">Login</button>
                </div>
                <div className="flex gap-x-3 items-center text-md">
                    <p>Don't have an account?</p>
                    <Link to="/register" className="text-blue-600 text-semibold">Register</Link>
                </div>
            </form>
        </div>
    )
}


export default Login