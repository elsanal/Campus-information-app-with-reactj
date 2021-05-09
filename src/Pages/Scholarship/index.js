import React from 'react'
import './style.css'
import CardView from '../CardView'
import SideBar from '../SideBar'
import { useTranslation } from 'react-i18next';
function Scholarship() {
    
    const { t, i18n } = useTranslation();

    return (
        <div className="scholarship_content">
            <div className="main_content">
            <div className="category">
                <div className="filter">
                    <select name="level" id="" className="level">
                        <option >-- {t('detail.sel_lev')} --</option>
                        <option value="all">{t('detail.all')}</option>
                        <option value="undergraduate">{t('detail.undergrad')}</option>
                        <option value="master">{t('detail.master')}</option>
                        <option value="phd">{t('detail.phd')}</option>
                        <option value="research">{t('detail.research')}</option>
                    </select>
                    <select name="type" id="" className="type">
                        <option >-- {t('detail.sel_type')} --</option>
                        <option value="all">{t('detail.all')}</option>
                        <option value="full">{t('detail.full')}</option>
                        <option value="partial">{t('detail.partial')}</option>
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
                
                <div className="items">
                    {/* <article><CardView/></article> */}
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
