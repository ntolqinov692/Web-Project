import CourseCard from "../../components/CoursesCard";
import {data} from "./data";
import './courses.css'


const Courses =()=>{
    return(
        <section id={"courses"}>

            <div className={"title"}>
                <h2>Our Popular Courses</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, repellat!</p>
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