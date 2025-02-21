import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Features from "./sections/features/Features";
import About from "./sections/about/About";
import Courses from "./sections/courses/Courses";
import './index.css'


const App = () => {
  return(
      <main>
          <Navbar/>
          <Header/>
          <Features/>
          <About/>
          <Courses/>
      </main>
  )
}

export default App