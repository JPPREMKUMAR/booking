import WhyBookinWithUs from "../components/WhyBookWithUs"

const AboutUs = () => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="px-5">

                <h1 className="text-center text-2xl sm:text-4xl my-3 sm:my-5 font-bold">AboutUs</h1>
                <div className="px-2 py-2 ">

                    <p className="text-md sm:text-xl font-semibold">

                        Welcome to CabBooking, Bengaluru’s most trusted cab and taxi service provider.
                        We specialize in Bengaluru Airport pickup and drop services, local city rides, and outstation cab bookings — all designed to give you a comfortable and reliable travel experience.

                        At CabBooking, our goal is to make your journey simple, safe, and affordable.
                        Whether you need a taxi from Kempegowda International Airport to the city, a local cab for daily travel, or a long-distance trip, we’ve got you covered 24/7.
                        We focus on providing transparent pricing, professional drivers, and well-maintained vehicles to make every ride smooth and enjoyable.

                    </p>
                </div>


            </div>
            <WhyBookinWithUs />


        </div>

    )
}


export default AboutUs