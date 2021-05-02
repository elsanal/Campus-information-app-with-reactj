import React, { useState, useEffect } from 'react'
import './style.css'
// import ScholarshipCard from '../ScholarshipCard'
import SideBar from '../SideBar'
import CardView from '../CardView'
import dataBase from '../../database'
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router';
import TextField from '@material-ui/core/TextField';
import parse from "html-react-parser";
import {makeComment, readComment} from '../Comments'


function ScholarshipDetail(props){
    const { t, i18n } = useTranslation();
    const {id} = useParams()
    const location = useLocation()
    const {data} = props.location.state
    const [scholarship, setScholarship] = useState([]);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [comment, setComment] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        dataBase.collection("scholarship")
          .where('country_english', "==",data.country_english)
          .onSnapshot((snapshot) =>
            setScholarship(
              snapshot.docs.map((doc) => ({
                id:doc.id,
                data:doc.data()
              }))
            )
          );
      }, []);


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
                    {
                        data.advantage_english!==null?
                        <div className="detail_title2">{t('detail.advantage')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.advantage_english)}</p>
                    {
                        data.condition_english!==null?
                        <div className="detail_title2">{t('detail.condition')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.condition_english)}</p>
                    {
                        data.requered_doc_english!==null?
                        <div className="detail_title2">{t('detail.required_doc')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.requered_doc_english)}</p>
                    {
                        data.how_apply_english!==null?
                        <div className="detail_title2">{t('detail.how_apply')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.how_apply_english)}</p>
                    {
                        data.other_detail_english!==null?
                        <div className="detail_title2">{t('detail.other')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.other_detail_english)}</p>
           </div>
           <div className="detail_suggestion">
               <p className="detail_title2">{t('detail.similar_scholar')}</p>
               <div className="suggested">
               {
                        scholarship.map(function(item){
                            return(
                                <article><CardView
                                        id={item.id}
                                        data={item.data}/>
                                </article>
                                 
                            )
                        })
                }
               </div>
           </div>
           
           <div className="detail_comment">
             <readComment
                id = {data.id}
             />
             <makeComment
                id = {data.id}
             />
           </div>
           </div>
           <div className="sidebar">
                 <SideBar/>
           </div>
        </div>
    )
}

export default ScholarshipDetail
