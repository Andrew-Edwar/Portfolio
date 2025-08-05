import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">
  Here are some of the web applications I have built as a full stack developer. While I enjoy working across the stack, I am especially passionate about backend development—designing robust APIs, managing databases, and deploying scalable solutions. My projects demonstrate my ability to deliver complete, production-ready applications.
  <br /><br />
  See more of my work on <a href="https://github.com/Andrew-Edwar" target="_blank" rel="noopener noreferrer">GitHub</a>.
</span>
            <div className="worksImgs">
                <div className="projectEntry">
  <h3>E-commerce Platform (PHP, Laravel)</h3>
  <p>
    Developed a robust e-commerce web application using PHP and the Laravel framework. The platform features user authentication, product management, shopping cart, order processing, and secure payment integration. Emphasized backend logic, database design, and scalable architecture to ensure a seamless shopping experience.
    {/* Optionally add your GitHub link here */}
    {/* <a href="https://github.com/Andreeeeewww/your-ecommerce-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
  </p>
</div>
                <div className="projectEntry">
      <h3>Job Seeker Platform (.NET, React)</h3>
      <p>
        Built a job seeker web application using .NET for the backend and React for the frontend. The platform allows users to create profiles, search and apply for jobs, and manage applications. Focused on secure authentication, RESTful API design, and a responsive user interface to provide a seamless experience for both job seekers and employers.
        {/* Optionally add your GitHub link here */}
        {/* <a href="https://github.com/Andreeeeewww/your-jobseeker-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
      </p>
    </div>
    <div className="projectEntry">
      <h3>Cinema Booking System (Node.js, Angular)</h3>
      <p>
        Designed and implemented a cinema booking system using Node.js for the backend and Angular for the frontend. The application enables users to browse movies, select showtimes, reserve seats, and manage bookings. Emphasized RESTful API development, real-time seat availability, and a dynamic, user-friendly interface for an optimal movie booking experience.
        {/* Optionally add your GitHub link here */}
        {/* <a href="https://github.com/Andreeeeewww/your-cinema-booking-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
      </p>
    </div>
    <div className="projectEntry">
      <h3>Brain Tumor Cancer Detection (Node.js, React)</h3>
      <p>
        Collaborated on a group project to develop a brain tumor cancer detection platform using Node.js for the backend and React for the frontend. The application leverages advanced algorithms to analyze medical images and assist in early detection of brain tumors. This project is currently competing in an international olympiad, showcasing its innovation and impact in the medical technology field.
        {/* Optionally add your GitHub link here */}
        {/* <a href="https://github.com/Andreeeeewww/your-brain-tumor-repo" target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
      </p>
    </div>
               
                
               
            </div>
            <a href="https://github.com/Andrew-Edwar" target="_blank" rel="noopener noreferrer">
                <button className="workBtn">See More</button>
            </a>
        </section>
    );
}

export default Works;