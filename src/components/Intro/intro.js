import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Andrew</span> <br />
                    Aspiring Full Stack Developer
                </span>
                <p className="introPara">
                I’m a soon-to-be graduate with practical experience in developing both frontend and backend components of modern web applications. <br />
                With a strong foundation in Software Engineering, I enjoy transforming ideas into efficient, user-friendly, and maintainable systems.<br /> 
                I am constantly learning and eager to contribute to real-world tech solutions that make a difference.
                    
                </p>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;