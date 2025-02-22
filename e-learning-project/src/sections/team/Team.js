import TeamCard from "../../components/TeamCard";
import {data} from "./data";
import './team.css'

const Team =()=>{
    return(
        <section id={'team'}>
            <div className={'title'}>
                <h2>Professional Instructors</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci amet aut dolores exercitationem, in ipsa, iure laboriosam
                    nisi nobis non nulla soluta suscipit voluptate? Ducimus eos expedita
                    harum nisi provident!
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