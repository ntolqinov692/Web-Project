import "./header.css";
import { RiArrowRightLine } from "react-icons/ri";

const Header = () => {
    return (
        <section id="header">
            <div className="container header__container">
                <h4>WARM WELCOME TO</h4>
                <h1>Edu Amaan - Where Knowledge <br />Meets Innovation!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto aspernatur at consequatur delectus, dolores est harum hic
                    nulla quibusdam repudiandae soluta temporibus!
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