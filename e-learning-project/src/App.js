import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Features from "./sections/features/Features";
import About from "./sections/about/About";
import Courses from "./sections/courses/Courses";
import Team from "./sections/team/Team"
import Testimonial from "./sections/testimonial/Testimonial";
import './index.css'


const App = () => {
  return(
      <main>
          <Navbar/>
          <Header/>
          <Features/>
          <About/>
          <Courses/>
          <Team/>
          <Testimonial/>
      </main>
  )
}

export default App