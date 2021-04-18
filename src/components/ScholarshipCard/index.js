import React from 'react'
import './style.css'
import image from '../../images/photos/img.jpeg'
import ScholarshipDetail from '../ScholarshipDetail'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';


function ScholarshipCard(props) {
    const { t, i18n } = useTranslation();
    return (
        <div className="card_container" >
            <img src={image} alt=""/>
            <div className="description">
                <h1>Title</h1>
                <h3>{t('detail.deadline')}</h3>
                <Link to='/detail'>
                    <button type="button" className="apply" >{t('detail.apply')}</button>
                </Link>
            </div>
        </div>
    )
}

export default ScholarshipCard
