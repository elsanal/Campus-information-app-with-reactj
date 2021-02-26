import React from 'react'
import './style.css'
import facebook from '../../images/logo/facebook.jpg'
import youtube from '../../images/logo/youtube.jpg'
import gmail from '../../images/logo/gmail.jpg'
import linkdin from '../../images/logo/linkdin.jpg'
import instagram from '../../images/logo/instagram.jpg'
import {Link} from 'react-router-dom'
function About() {
    return (
        <div className="about_container">
            <div className="quote">
                <h4> “ Education is the passport to the future, for tomorrow belongs to those who prepare for it.”</h4>
                <p>Malcom X</p>
                <h4>“ Education is the most powerful weapon we could use to change the wold.”</h4>
                <p>Nelson Mandela</p>
            </div>
            <div className="presentation">
                <p>Who are we?</p>
                <div>
                    Campus + is an independent small group of students who are 
                    interested to help others students to get admission 
                    in different countries. We collect the information from 
                    different organizations and then share it on our site.
                    We don't collect money from anyone. We just help you with 
                    some useful information. You can support us by sharing our website and 
                    application with your friends and relatives through social media. 
                </div>
            </div>
            <div className="contact">
                <div>Email : campus@gmail.com</div>
                <div>Tel : +86 15022094681</div>
            </div>
            <div className="social_media">
                    <p>Follow us on : </p>
                    <Link><img src={facebook} alt="Facebook"/></Link>
                    <Link><img src={youtube} alt=""/></Link>
                    <Link><img src={instagram} alt=""/></Link>
                    <Link><img src={linkdin} alt=""/></Link>
                    <Link><img src={gmail} alt=""/></Link>
            </div>
        </div>
    )
}

export default About
