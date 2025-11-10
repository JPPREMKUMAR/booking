
import VehicleList from "../components/VehicleList"
import WhyBookWithUs from "../components/WhyBookWithUs"
import ContactWithUs from "../components/ContactWithUs"
import BookingCard from "../components/BookingCard"
import ContactDetails from "../components/ContactDetails.jsx"

const Home = () => {

    return (
        <div className="px-2">


            <BookingCard />

            <VehicleList Title={'AIRPORT TAXI'} />



            <ContactDetails />




        </div>
    )
}


export default Home