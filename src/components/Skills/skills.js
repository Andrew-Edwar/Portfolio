import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import Certificate from '../../assets/certifcate.png';
import Certificatee from '../../assets/certifcate2.png';


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
  I am a passionate full stack developer, soon to graduate, with hands-on experience in both frontend and backend web development. While I am comfortable working across the stack, I especially enjoy backend development—building robust APIs, working with databases, and deploying scalable cloud solutions. Certified by IBM as a Full Stack Software Developer.
</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={AppDesign} alt="Backend" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Backend Development</h2>
                        <p>
                            Node.js, Express, Python, REST APIs, .NET Core, PHP .
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Frontend" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>
                            React, Angular, HTML, CSS, JavaScript, UI/UX best practices.
                        </p>
                    </div>
                </div>
                {/* Add more skill bars as needed */}
            </div>
            <div className="certificate">
                <img src={Certificate} alt="IBM Full Stack Certificate" className="certificateImg" />
                <p>IBM Certified Full Stack Software Developer</p>
            </div>
            <div className="certificate">
                <img src={Certificatee} alt="Olympic Certificate" className="certificateImg" />
                <p>Participation in the Seventh Computers and Information Olympics </p>
            </div>
        </section>
    );
}

export default Skills;