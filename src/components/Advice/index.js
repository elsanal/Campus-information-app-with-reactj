import React, {Suspense, useState } from 'react'
import './style.css'
import SideBar from '../SideBar'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import ListFR from '../../adviceFR'
import ListEN from '../../adviceEN'

function Advice() {
    let category;

    const button_data = [
        {
            "title" :"How to get Scholarship ?",
            "order":0
        },
        {
            "title" :"Foreign university admission",
            "order":1
        },
        {
            "title" :"Myths behind Scholarship",
            "order":2
        },
        {
            "title" :"How to choose your major ?",
            "order":3
        },

    ] 


const [index, setIndex] = useState(0);
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
                                {item.title}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="big_title">{button_data[index].title}</div>
                <POSTS data = {ListFR[index]}/>
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
