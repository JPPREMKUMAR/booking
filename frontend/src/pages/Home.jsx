

import VehicleList from "../components/VehicleList"
import ModelOne from "../components/ModelOne"
import ModelTwo from "../components/ModelTwo"
import ModelThree from "../components/ModelThree"
import ModelFour from "../components/ModelFour"
import ModelFive from "../components/ModelFive"


const Home = () => {

    return (
        <div>
            <VehicleList Title={'AIRPORT TAXI'} />
            {
            /*
            <VehicleList Title={'INNOVA TAXI'} />
            <VehicleList Title={'OUTSTATION'} />
            <VehicleList Title={'LOCAL PACKAGE'} />
            <VehicleList Title={'LOCAL TAXI'} />
            <VehicleList Title={'MINI BUSES'} /> 
            */}
            <ModelOne />
            <ModelTwo />
            <ModelThree />
            <ModelFour />
            <ModelFive />


        </div>
    )
}


export default Home