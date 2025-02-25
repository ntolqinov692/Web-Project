import "./header.css";
import { RiArrowRightLine } from "react-icons/ri";

const Header = () => {
    return (
        <section id="header">
            <div className="container header__container">
                <h4>WARM WELCOME TO</h4>
                <h1>Edu Amaan - Your Path to Mastering <br />the Future of Tech!</h1>
                <p>
                    Unlock your potential, build your expertise, and take the next step toward a thriving
                    career in technology. The future is digital – and it starts here.
                </p>
                <div className="header__cta">
                    <a href="" className="header__btn">
                        Get Started <RiArrowRightLine />
                    </a>
                    <a href="" className="header__btn">
                        View Courses <RiArrowRightLine />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Header;

