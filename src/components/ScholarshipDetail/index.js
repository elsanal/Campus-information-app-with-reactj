import React, { useState, useEffect } from 'react'
import {Link } from 'react-router-dom'
import './style.css'
// import ScholarshipCard from '../ScholarshipCard'
import SideBar from '../SideBar'
import CardView from '../CardView'
import dataBase from '../../database'
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from 'react-router';
import TextField from '@material-ui/core/TextField';
import parse from "html-react-parser";
import {MakeComment, ReadComment} from '../Comments'


function ScholarshipDetail(props){
    const { t, i18n } = useTranslation();
    const language = i18n.language;
    const {id} = useParams()
    const location = useLocation()
    const {data} = props.location.state
    const [scholarship, setScholarship] = useState([]);

    useEffect(() => {
        dataBase.collection("scholarship")
          .where('country_english', "!=",data.country_english)
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
              
           {
                   language ==='fr'?
            <div className='section'>
                <div className="detail_header">
                    <div className="title">{data.name_french}   {data.year}</div>
                    <div className="name">{t('detail.scholar_name')} : <p>{data.name_french} - {data.year}</p></div>
                    <div className="country">{t('detail.country')} : <p>{data.country_french}</p></div>
                    <div className="year">{t('detail.year')} : <p>{data.year}</p></div>
                    <div className="duration">{t('detail.duration')} : <p>{data.duration}</p> </div>
                    <div className="level">{t('detail.level')}: 
                    {
                        data.level_french.map(function(item,index){
                            var coma = ','
                            if(index == data.level_french.length-1){
                                coma='.'
                            }
                            return(
                                <p>{item + coma}</p>
                            )
                        })
                    } 
                    </div>
                    <div className="amount">{t('detail.amount')} : <p>{data.amount}</p></div>
                    <div className="eligible">{t('detail.eligible')} : <p>{data.eligible_french}</p></div>
                </div>
                <div className="detail_body">
                    {
                        data.description_french!==''?
                        <div className="paragraph">{parse(data.description_french)}</div>:
                        <div></div>
                    }
                
                </div>
                <div className="detail_conclusion">
                    {
                        data.advantage_french!==''?
                        <div className="detail_title2">{t('detail.advantage')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.advantage_french)}</p>
                    {
                        data.condition_french!==''?
                        <div className="detail_title2">{t('detail.condition')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.condition_french)}</p>
                    {
                        data.requered_doc_french!==''?
                        <div className="detail_title2">{t('detail.required_doc')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.requered_doc_french)}</p>
                    {
                        data.how_apply_french!==''?
                        <div className="detail_title2">{t('detail.how_apply')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.how_apply_french)}</p>
                    {
                        data.other_detail_french!==''?
                        <div className="detail_title2">{t('detail.other')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.other_detail_french)}</p>
                    
                </div>
                <div className="buttons">
                        <button type="button" className="button1">
                            <a href={data.apply_link}>Apply now</a>
                        </button>
                        <button type="button" className="button2">
                            <a href={data.official_web}>Official Website</a>
                        </button>
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
              
            </div>:
            <div className="section">
                <div className="detail_header">
                    <div className="title">{data.name_english}   {data.year}</div>
                    <div className="name">{t('detail.scholar_name')} : <p>{data.name_english} - {data.year}</p></div>
                    <div className="country">{t('detail.country')} : <p>{data.country_english}</p></div>
                    <div className="year">{t('detail.year')} : <p>{data.year}</p></div>
                    <div className="duration">{t('detail.duration')} : <p>{data.duration}</p> </div>
                    <div className="level">{t('detail.level')}: 
                    
                    {
                        data.level_english.map(function(item,index){
                            var coma = ','
                            if(index == data.level_english.length-1){
                                coma='.'
                            }
                            return(
                                <p>{item + coma}</p>
                            )
                        })
                    }
                     </div>
                    <div className="amount">{t('detail.amount')} : <p>{data.amount}</p></div>
                    <div className="eligible">{t('detail.eligible')} : <p>{data.eligible_english}</p></div>
                </div>
              
                <div className="detail_body">
                    {
                        data.description_english!==''?
                        <div className="paragraph">{parse(data.description_english)}</div>:
                        <div></div>
                    }
                
                </div>
                <div className="detail_conclusion">
                    {
                        data.advantage_english!==''?
                        <div className="detail_title2">{t('detail.advantage')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.advantage_english)}</p>
                    {
                        data.condition_english!==''?
                        <div className="detail_title2">{t('detail.condition')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.condition_english)}</p>
                    {
                        data.requered_doc_english!==''?
                        <div className="detail_title2">{t('detail.required_doc')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.requered_doc_english)}</p>
                    {
                        data.how_apply_english!==''?
                        <div className="detail_title2">{t('detail.how_apply')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.how_apply_english)}</p>
                    {
                        data.other_detail_english!==''?
                        <div className="detail_title2">{t('detail.other')} : </div>:
                        <div></div>
                    }
                    <p>{parse(data.other_detail_english)}</p>
                    
                </div>
                <div className="buttons">
                        <button type="button" className="button1">
                            <a href={data.apply_link}>Apply now</a>
                        </button>
                        <button type="button" className="button2">
                            <a href={data.official_web}>Official Website</a>
                        </button>
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
                
            </div>
                   
                }
                <p className="detail_title2">{t('detail.comments')}</p>
                <ReadComment
                        id = {data.id}
                />
                    <MakeComment
                        id = {data.id}
                />
           </div>
        </div>
    )
}

export default ScholarshipDetail
