import React, {Suspense, useState } from 'react'
import './style.css'
import SideBar from '../SideBar'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import ListFR from '../../translation/fr/adviceFR'
import ListEN from '../../translation/en/adviceEN'

function Advice() {
    let category;

    const button_data = [
        {
            "title_en" :"How to get Scholarship ?",
            "title_fr":"Comment avoir une bourse ?",
            "order":0
        },
        {
            "title_en" :"Foreign university admission",
            "title_fr":"Admission dans une université ?",
            "order":1
        },
        {
            "title_en" :"Myths behind Scholarship",
            "title_fr":"Les mythes derrière les bourses",
            "order":2
        },
        {
            "title_en" :"How to choose your major ?",
            "title_fr":"Comment choisir sa filière?",
            "order":3
        },

    ] 


const [index, setIndex] = useState(0);
const { t, i18n } = useTranslation();

var language = i18n.language;
const changeIndex = (index) => {
    setIndex(index);
}
    return (
        <div className="advice_content">
            <div className="main_content">
                <div className="category_button">
                    {
                        button_data.map(function(item, index){
                            return (
                                <div className="button" onClick={()=>changeIndex(index)}>
                                {
                                    language==='fr'?
                                    button_data[index].title_fr:
                                    button_data[index].title_en
                                }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="big_title">
                    {
                        language==='fr'?
                        button_data[index].title_fr:
                        button_data[index].title_en
                    }
                </div>
                {
                
                    language==='fr'?
                    <POSTS data = {ListFR[index]}/> :
                    <POSTS data = {ListEN[index]}/>

                }
                
            </div>
            <div className="sidebar">
            <SideBar/>
            </div>
        </div>
    )
}

function POSTS(props){ 
    
    return (<div className="post">
       {
        props.data.map(function(item, index){
            return (
             <div className ="category_content" >
                 {
                     index !== 0 &&
                     <div className="title"><p>{index} -</p>{item.title} </div>
                 }
                 <div className="description">{item.description}</div>
                 
             </div>
            )
        })
     }
    </div>
    )
}



export default Advice
