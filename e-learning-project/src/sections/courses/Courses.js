import CourseCard from "../../components/CoursesCard";
import {data} from "./data";
import './courses.css'


const Courses =()=>{
    return(
        <section id={"courses"}>

            <div className={"title"}>
                <h2>Our Popular Courses</h2>
                <p>We offer cutting-edge IT courses in Data Science, AI, Cybersecurity, Frontend, Backend, and more.
                </p>
            </div>
            <div className={"container courses__container"}>
                {
                    data.map((item)=>(
                         <CourseCard key={item.imgURL}{...item} /> // Add close button to the first course
                    ))
                }
            </div>
        </section>
    )
}

export default Courses;
