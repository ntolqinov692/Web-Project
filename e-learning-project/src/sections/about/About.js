import './about.css';
import aboutImage from '../../images/about.png';

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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Amet explicabo, impedit ipsam magnam optio quod! Ab, molestiae,
                        sunt? Aliquam ea ipsum nemo sapiente.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;