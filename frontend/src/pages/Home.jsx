
import VehicleList from "../components/VehicleList"
import WhyBookWithUs from "../components/WhyBookWithUs"
import ContactWithUs from "../components/ContactWithUs"

const Home = () => {

    return (
        <div className="px-5 py-2 my-10">

            <h1 className="text-center text-4xl text-purple-500 font-bold ">RKN AIRPORT TAXI</h1>
            <h1 className="text-xl text-center px-12 my-3 text-black font-bold uppercase">Welcome to Bengaluru Cab Booking</h1>
            <p className="text-md my-3 text-gray-900 text-center font-bold uppercase">Book your airport pickup and drop now!</p>



            <VehicleList Title={'INNOVA TAXI'} />
            <VehicleList Title={'OUTSTATION'} />
            <VehicleList Title={'LOCAL TAXI'} />
            <VehicleList Title={'MINI BUSES'} />


            <WhyBookWithUs />





        </div>
    )
}


export default Home