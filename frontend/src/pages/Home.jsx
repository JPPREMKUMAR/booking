
import VehicleList from "../components/VehicleList"
import WhyBookWithUs from "../components/WhyBookWithUs"
import ContactWithUs from "../components/ContactWithUs"
import BookingCard from "../components/BookingCard"
import ContactDetails from "../components/ContactDetails"
import Carousel from "../components/Carousel"

const Home = () => {

    return (
        <div className="px-2 my-5">

            <Carousel />

            <BookingCard />

            <VehicleList Title={'AIRPORT TAXI'} />








        </div>
    )
}


export default Home