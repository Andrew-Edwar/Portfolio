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
                    I am a soon-to-be graduate with hands-on experience building web applications.<br />
                    I have worked on both frontend and backend projects, but I prefer backend development.<br />
                    I enjoy creating robust, scalable, and efficient solutions.
                </p>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;