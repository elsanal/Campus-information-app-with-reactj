import React from 'react'
import './style.css'
import facebook from '../../images/logo/facebook.jpg'
import youtube from '../../images/logo/youtube.jpg'
import gmail from '../../images/logo/gmail.jpg'
import linkdin from '../../images/logo/linkdin.jpg'
import instagram from '../../images/logo/instagram.jpg'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import aboutFr from '../../Translation/fr/about'
import aboutEn from '../../Translation/en/about'


function About() {

    const { t, i18n } = useTranslation();
    var language = i18n.language;
    
    return (
        <div className="about_container">
            {
                language ==='fr'?
                <div className="quote">
                    <h4>{aboutFr[0]['quote-1']}</h4>
                    <p>{aboutFr[0]['author-1']}</p>
                    <h4>{aboutFr[0]['quote-2']}</h4>
                    <p>{aboutFr[0]['author-2']}</p>
                </div>:
                <div className="quote">
                    <h4>{aboutEn[0]['quote-1']}</h4>
                    <p>{aboutEn[0]['author-1']}</p>
                    <h4>{aboutEn[0]['quote-2']}</h4>
                    <p>{aboutEn[0]['author-2']}</p>
                </div>
            }
            <div className="presentation">
                {
                    language ==='fr'?
                    <p>{aboutFr[0]['title']}</p>:
                    <p>{aboutEn[0]['title']}</p>
                }
                {
                    language ==='fr'?
                    <div>{aboutFr[0]['description']}</div>:
                    <div>{aboutEn[0]['description']}</div>
                }
            </div>
            <div className="contact">
                <div>Email : campus@gmail.com</div>
                <div>Tel : +86 15022094681</div>
            </div>
            <div className="social_media">
                    {
                        language ==='fr'?
                        <p>{aboutFr[0]['follow']}</p>:
                        <p>{aboutEn[0]['follow']}</p>
                    }
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
