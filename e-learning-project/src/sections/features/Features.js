import {data} from "./data"
import './features.css'
import FeaturesCard from "../../components/FeaturesCard";

const Features =()=>{
    return(
        <section id={"features"}>
            <div className={"container features__container"}>
                {
                    data.map((item)=>(
                        <FeaturesCard key={}/>
                    ))
                }
            </div>
        </section>

    );
}


export default Features;