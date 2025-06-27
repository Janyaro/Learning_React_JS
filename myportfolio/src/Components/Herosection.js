import React from 'react';
import userImage from '../assets/user.png'
export default function Herosection() {
    return (
        <div className='hero-section' style={{
            height: "90vh",
            backgroundColor: "#ecfdf5 "
        }}>
            <img className='img-center'
                src={userImage}
                alt="User"
                width="165px"
                height="140px"
            />
            <h1 className='gradient-text '>Wasim Akram</h1>
            <p className='user-description container'>
                Full-Stack Developer & UI/UX Designer crafting digital experiences that make a difference
            </p>
              <div className='container text-center my-5'>
              <button type="button" className="btn  btn-primary large-btn mx-2">View my Work</button>
              <button type="button" className="btn large-btn border-dark text-dark">Get in Touch</button>
              </div>
              <i className="fa-solid fa-arrow-down"></i>
        </div>
    )
}
