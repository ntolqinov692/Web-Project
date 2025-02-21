import './navbar.css';
import { useState, useEffect } from 'react';
import {
    RiFacebookBoxFill, RiGraduationCapFill, RiInstagramFill,
    RiLinkedinFill, RiTwitterFill, RiMoonFill, RiSunFill, RiMenuLine, RiCloseLine
} from "react-icons/ri";
import navData from "./daja";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close mobile menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav>
            <div className="container tn_container">
                <a href="index.html" className="nav_logo">
                    <span><RiGraduationCapFill size={33} /></span>Edu Amaan
                </a>

                {/* Mobile Menu Toggle Button */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
                </button>

                <div className={`nav__container ${isMenuOpen ? "active" : ""}`}>
                    <ul className="nav__menu">
                        {navData.map(item => (
                            <li key={item.id}>
                                <a href={item.link} onClick={handleLinkClick}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav__actions">
                        <button className='nav__btn'>Get Certificate</button>
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {darkMode ? <RiSunFill /> : <RiMoonFill />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;