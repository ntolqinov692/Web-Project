import './testimonial.css'
import TestimonialCard from "../../components/TestimonialCard";
import {data} from './data';
const Testimonial=()=>{
    return(
        <section id={"testimonial"}>
            <div className={"title"}>
                <h2>People Says</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta
                    error explicabo fugiat illo molestiae molestias neque nulla quae, reprehenderit
                    repudiandae tempore temporibus.
                </p>
            </div>
            <div className={"container testimonial__container"}>
                {
                    data.map((item=>(
                        <TestimonialCard key={item.title}{...item}/>
                    )))
                }
            </div>
        </section>
    );
}

export default Testimonial;