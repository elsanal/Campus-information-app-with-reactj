import React from 'react'
import './style.css'
// import ScholarshipCard from '../ScholarshipCard'
import SideBar from '../SideBar'
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router';
import parse from "html-react-parser";

function ScholarshipDetail(props){
    const { t, i18n } = useTranslation();
    const {id} = useParams()
    const location = useLocation()
    const {data} = props.location.state
    console.log(data)
    return (
        <div className="detail_container">
           <div className="main_content">
           <div className="detail_header">
                <div className="title">{data.name_english}   {data.year}</div>
                <div className="name">{t('detail.scholar_name')} : <p>{data.name_english} - {data.year}</p></div>
                <div className="country">{t('detail.country')} : <p>{data.country_english}</p></div>
                <div className="year">{t('detail.year')} : <p>{data.year}</p></div>
                <div className="duration">{t('detail.duration')} : <p>{data.duration}</p> </div>
                <div className="level">{t('detail.level')}: <p>{data.level_english}</p> </div>
                <div className="amount">{t('detail.amount')} : <p>{data.amount}</p></div>
                <div className="eligible">{t('detail.eligible')} : <p>{data.eligible_english}</p></div>
           </div>
           <div className="detail_body">
                <div className="paragraph">{parse(data.description_english)}</div>
           </div>
           <div className="detail_conclusion">
                <div className="detail_title2">{t('detail.advantage')} : </div>
                    <p>{parse(data.advantage_english)}</p>
                <div className="detail_title2">{t('detail.condition')} : </div>
                    <p>{parse(data.condition_english)}</p>
                <div className="detail_title2">{t('detail.required_doc')} : </div>
                    <p>{data.required_doc_english}</p>
                <div className="detail_title2">{t('detail.how_apply')} : </div>
                    <p>{parse(data.how_apply_english)}</p>
                <div className="detail_title2">{t('detail.other')} : </div>
                    <p>{parse(data.other_detail_english)}</p>
           </div>
           <div className="detail_suggestion">
               <p className="detail_title2">{t('detail.similar_scholar')}</p>
               <div className="suggested">
                    {/* <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article> */}
               </div>
           </div>
           <div className="detail_comment">
               <p className="detail_title2">{t('detail.comment')}</p>
               <input type="text" placeholder={t('detail.enter_name')} className="input" required/>
               <input type="email" placeholder={t('detail.enter_email')} className="input" required/>
               <textarea name="comment" id="" className="comment" placeholder={t('detail.enter_message')} required></textarea>
               <button type="submit" className="button">{t('detail.submit')}</button>
           </div>
           </div>
           <div className="sidebar">
                 <SideBar/>
           </div>
        </div>
    )
}

export default ScholarshipDetail
