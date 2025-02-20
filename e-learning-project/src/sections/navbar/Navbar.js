import './navbar.css';
import { useState, useEffect } from 'react';
import {
    RiFacebookBoxFill, RiGraduationCapFill, RiInstagramFill,
    RiLinkedinFill, RiTwitterFill, RiMoonFill, RiSunFill
} from "react-icons/ri";
import navData from "./daja";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Load theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("darkMode");
        if (savedTheme === "true") {
            setDarkMode(true);
            document.body.classList.add("dark-mode");
        }
    }, []);

    // Toggle dark mode
    const toggleTheme = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "true");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "false");
            }
            return newMode;
        });
    };

    return (
        <nav>
            <div className="container nav_container">
                <a href="index.html" className="nav_logo">
                    <span><RiGraduationCapFill size={33} /></span>Amaan-EDU
                </a>

                <div className="tn__social">
                    <a href="#"><RiFacebookBoxFill /></a>
                    <a href="#"><RiInstagramFill /></a>
                    <a href="#"><RiLinkedinFill /></a>
                    <a href="#"><RiTwitterFill /></a>
                </div>

                <div className="container nav__container">
                    <ul className="nav__menu">
                        {navData.map(item => (
                            <li key={item.id}><a href={item.link}>{item.title}</a></li>
                        ))}
                    </ul>
                    <button className='nav__btn'>Get Certificate</button>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {darkMode ? <RiSunFill /> : <RiMoonFill />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;