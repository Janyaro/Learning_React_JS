import React from 'react';
import userImage from '../assets/user.png'
export default function About() {
    return (
        <div className='container text-center my-5'>
            <h1>About</h1>
            <p className='text-muted about-text'>
                Passionate about creating innovative solutions and beautiful user experiences
            </p>
            
            <div className="d-flex justify-content-center mt-4 flex my-5">
                    <img 
                        src={userImage}
                        className="card-img-top img-detail rounded" 
                        alt="User profile" 
                    />
                    
            
                <div className="text-muted about-description">
                        <p>
                            Welcome to my digital space! I'm <strong>Wasim Akram Janyaro</strong>, a passionate and driven software engineer
                            with a strong focus on building modern, user-friendly applications using technologies like 
                            <strong> Flutter</strong>, <strong> Firebase</strong>, <strong> React JS</strong>, and <strong> Node.js</strong>. 
                            Currently pursuing my Bachelor's degree in Software Engineering from Mehran University of Engineering and Technology, 
                            I enjoy transforming ideas into real-world solutions through clean code and creative design.
                        </p>
                        <p>
                            Over the years, I’ve worked on multiple projects, ranging from mobile apps to web-based platforms,
                            with a special interest in <strong>cross-platform development</strong>, 
                            <strong> real-time databases</strong>, and <strong> user experience optimization</strong>. 
                            I'm also an enthusiastic learner who constantly explores new tools and trends in tech 
                            to improve my skills and create meaningful digital experiences.
                        </p>
                        <p>
                            Whether you’re here to explore my work, collaborate on a project, or just say hello — 
                            I’m glad you stopped by!
                        </p>
                    </div>
            </div>
        </div>
    );
}
