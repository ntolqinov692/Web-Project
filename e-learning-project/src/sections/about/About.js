import './about.css';
import aboutImage from '../../images/about.jpg';

const About = () => {
    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__image">
                        <img src={aboutImage} alt="About Us" />
                    </div>
                </div>
                <div className="about__right">
                    <h3>Our Team's Message</h3>
                    <p>
                        At Edu Amaan, we’re here to help you unlock your tech potential. Our mission is simple – to
                        equip you with the skills needed for success in the ever-changing world of technology. From
                        AI to Data Science, Cybersecurity, Frontend, Backend, and beyond, we cover a wide range of
                        cutting-edge fields to help you grow. Your journey starts here. Embrace the challenge, and let’s
                        build your future together!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
