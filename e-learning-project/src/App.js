// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Features from "./sections/features/Features";
import About from "./sections/about/About";
import Courses from "./sections/courses/Courses";
import Team from "./sections/team/Team";
import Testimonial from "./sections/testimonial/Testimonial";
import Blog from "./sections/blog/Blog";
import Footer from "./sections/footer/Footer";
import Login from "./sections/login/Login";
import './index.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <Features />
                        <About />
                        <Courses />
                        <Team />
                        <Testimonial />
                        <Blog />
                        <Footer />
                    </>
                } />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
