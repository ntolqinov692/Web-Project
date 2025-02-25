import TeamCard from "../../components/TeamCard";
import {data} from "./data";
import './team.css'

const Team =()=>{
    return(
        <section id={'team'}>
            <div className={'title'}>
                <h2>Professional Instructors</h2>
                <p>
                    At Edu Amaan, we believe that the best learning comes from the best instructors. Our team consists of industry professionals with years of experience in their fields.
                    They don’t just teach – they mentor, guide, and inspire. With a passion for both teaching and technology, they bring real-world insights into the classroom, helping
                    you connect theory with practice.
                </p>
            </div>
            <div className={'container team__container'}>
                {
                    data.map((item=>(
                        <TeamCard key={item.imgURL}{...item}/>
                    )))
                }
            </div>
        </section>
    );
}

export default Team;
