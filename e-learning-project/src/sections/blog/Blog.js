import {data} from "./data";
import './blog.css'
import BlogCard from "../../components/BlogCard";

const Blog=()=>{
    return(
        <section id={'blog'}>
            <div className={"title"}>
                <h2>Latest News</h2>

            </div>
            <div className={"container blog__container"}>
                {
                    data.map((item=>(
                        <BlogCard key={item.imgURL}{...item}/>
                    )))
                }
            </div>
        </section>
    )
}

export default Blog;
