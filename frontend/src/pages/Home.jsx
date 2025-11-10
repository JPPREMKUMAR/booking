
import VehicleList from "../components/VehicleList"
import WhyBookWithUs from "../components/WhyBookWithUs"
import ContactWithUs from "../components/ContactWithUs"
import BookingCard from "../components/BookingCard"
const Home = () => {

    return (
        <div className="px-2">


            <BookingCard />

            <VehicleList Title={'INNOVA TAXI'} />
            <VehicleList Title={'OUTSTATION'} />
            <VehicleList Title={'LOCAL TAXI'} />
            <VehicleList Title={'MINI BUSES'} />


            <WhyBookWithUs />





        </div>
    )
}


export default Home