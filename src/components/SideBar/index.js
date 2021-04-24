import React from 'react'
import './style.css'
import ScholarshipCard from '../CardView'
import image from '../../images/photos/img.jpeg'
import facebook from '../../images/logo/facebook.jpg'
import youtube from '../../images/logo/youtube.jpg'
import gmail from '../../images/logo/gmail.jpg'
import linkdin from '../../images/logo/linkdin.jpg'
import instagram from '../../images/logo/instagram.jpg'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Sidebar() {

    const { t, i18n } = useTranslation();

    return (
        <div className="sidebar_container">
            <div className="users">
                <div>{t('sidebar.nb_visitor')} : <p>103242</p> </div>
                <div>{t('sidebar.nb_user')} : <p>3982373</p></div>
            </div>
            <div className="most_read">
                <p>{t('sidebar.most_viewed')} </p>
                <div className="posts">
                <img src={image} alt=""/>
                    <p>Bourse du gouvernment chinois 2021 - 2022</p>
                </div>
                <div className="posts">
                <img src={image} alt=""/>
                    <p>Bourse du gouvernment chinois 2021 - 2022</p>
                </div>
                <div className="posts">
                <img src={image} alt=""/>
                    <p>Bourse du gouvernment chinois 2021 - 2022</p>
                </div>
                <div className="posts">
                <img src={image} alt=""/>
                    <p>Bourse du gouvernment chinois 2021 - 2022</p>
                </div>
            </div>
            <div className="last_interview">
                    <p>{t('sidebar.last_interview')}</p>
                    <img src={image} alt=""/>
            </div>
            <div className="social_media">
                    <p>{t('sidebar.follow_us')} : </p>
                    <Link><img src={facebook} alt="Facebook"/></Link>
                    <Link><img src={youtube} alt=""/></Link>
                    <Link><img src={instagram} alt=""/></Link>
                    <Link><img src={linkdin} alt=""/></Link>
                    <Link><img src={gmail} alt=""/></Link>
            </div>
        </div>
    )
}

export default Sidebar
