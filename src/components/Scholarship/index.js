import React from 'react'
import './style.css'
import ScholarshipCard from '../ScholarshipCard'
import SideBar from '../SideBar'
import { useTranslation } from 'react-i18next';
function Scholarship() {
    // const {t}  = useTranslation();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    return (
        <div className="scholarship_content">
            <div className="main_content">
            <div className="category">
                <div className="filter">
                    <select name="level" id="" className="level">
                        <option >-- select level --</option>
                        <option value="all">All</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="master">Master</option>
                        <option value="phd">PhD</option>
                        <option value="research">Research</option>
                    </select>
                    <select name="type" id="" className="type">
                        <option >-- select type --</option>
                        <option value="all">All</option>
                        <option value="full">Full</option>
                        <option value="partial">Partial</option>
                    </select>
                    <select name="country" id="" className="country">
                        <option >-- select country --</option>
                        <option value="all">All</option>
                        <option value="canada">Canada</option>
                        <option value="china">China</option>
                        <option value="german">Germany</option>
                        <option value="usa">USA</option>
                    </select>
                    <button type="button" className="button">Find</button>
                </div>
                
                <div className="items">
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                </div>
                </div>
                    </div>
            <div className="sidebar">
            <SideBar/>
            </div>
        </div>
    )
}

export default Scholarship
