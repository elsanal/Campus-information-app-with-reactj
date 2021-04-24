import React from 'react'
import './style.css'
import CardView from '../CardView'
import SideBar from '../SideBar'
import { useTranslation } from 'react-i18next';
import image from '../../images/photos/img.jpeg'

function University() {
    const { t, i18n } = useTranslation();

    var university = [
        {
            "id":"beihang",
            "name":"Beihang University",
            "country":"China",
            "rank":"1",
            "website":"www.buaa.edu.cn",
            "img":image
        },
        {
            "id":"tsinghua",
            "name":"Tsing Hua University",
            "country":"China",
            "rank":"2",
            "website":"www.thua.edu.cn",
            "img":image
        },
        {
            "id":"tianjinuni",
            "name":"Tianjin University",
            "country":"China",
            "rank":"3",
            "website":"www.tjin.edu.cn",
            "img":image
        },
        {
            "id":"renmin",
            "name":"Renmin University",
            "country":"China",
            "rank":"4",
            "website":"www.remin.edu.cn",
            "img":image
        },
    ]

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
                    {
                        university.map(function(item){
                            return(
                                <article><CardView
                                        name={item.name}
                                        img={item.img}
                                        deadline={item.deadline} 
                                        link='/detail'/>
                                </article>
                            )
                        })
                    }
                    
                    {/* <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article> */}
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
