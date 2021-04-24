import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';


function CardView(props) {
    const { t, i18n } = useTranslation();
    return (
        <div className="card_container" >
            <img src={props.img} alt=""/>
            <div className="description">
                <h1>{props.name}</h1>
                <h3>{props.deadline}</h3>
                <Link to={props.link}>
                    <button type="button" className="apply" >{t('detail.apply')}</button>
                </Link>
            </div>
        </div>
    )
}

export default CardView
