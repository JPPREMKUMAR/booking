
import VehicleList from "../components/VehicleList"
import WhyBookWithUs from "../components/WhyBookWithUs"
import ContactWithUs from "../components/ContactWithUs"

const Home = () => {

    return (
        <div className="px-5 py-2">
            <h1 className=" text-xl my-2 sm:4xl text-center font-semibold ">Welcome to Bengaluru Cab Booking</h1>
            <p className="text-md my-2 sm:xl text-center font-semibold">Book your airport pickup and drop now!</p>

            <VehicleList Title={'INNOVA TAXI'} />
            <VehicleList Title={'OUTSTATION'} />
            <VehicleList Title={'LOCAL TAXI'} />
            <VehicleList Title={'MINI BUSES'} />


            <WhyBookWithUs />





        </div>
    )
}


export default Home