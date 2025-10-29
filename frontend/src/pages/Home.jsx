

import VehicleList from "../components/VehicleList"

import CarouselTransition from "../components/CarouselTransition"


const Home = () => {

    return (
        <div className="px-3 py-2">



            <VehicleList Title={'INNOVA TAXI'} />
            <VehicleList Title={'OUTSTATION'} />
            <VehicleList Title={'LOCAL TAXI'} />
            <VehicleList Title={'MINI BUSES'} />



        </div>
    )
}


export default Home