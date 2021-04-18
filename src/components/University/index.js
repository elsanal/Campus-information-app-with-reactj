import React from 'react'
import './style.css'
import ScholarshipCard from '../ScholarshipCard'
import SideBar from '../SideBar'
import { useTranslation } from 'react-i18next';

function University() {
    const { t, i18n } = useTranslation();

    return (
        <div className="university_content">
            <div className="main_content">
            <div className="filter">
                    <select name="level" id="" className="level">
                        <option >-- {t('detail.sel_lev')} --</option>
                        <option value="all">{t('detail.all')}</option>
                        <option value="undergraduate">{t('detail.undergrad')}</option>
                        <option value="master">{t('detail.master')}</option>
                        <option value="phd">{t('detail.phd')}</option>
                        <option value="research">{t('detail.research')}</option>
                    </select>
                    <select name="major" id="" className="type">
                        <option >-- {t('detail.sel_maj')} --</option>
                        <option value="all">{t('detail.all')}</option>
                        <option value="electronic">Electonic Engineering</option>
                        <option value="medicine">Midecine</option>
                        <option value="computer">Computer Science</option>
                        <option value="design">Design</option>
                    </select>
                    <select name="country" id="" className="country">
                        <option >-- {t('detail.country')} --</option>
                        <option value="all">{t('detail.all')}</option>
                        <option value="canada">Canada</option>
                        <option value="china">China</option>
                        <option value="german">Germany</option>
                        <option value="usa">USA</option>
                    </select>
                    <button type="button" className="button">{t('detail.find')}</button>
                </div>
            <div className="category">
                <div className="items">
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

export default University
