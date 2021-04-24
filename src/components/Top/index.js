import React from 'react'
import './style.css'
// import ScholarshipCard from '../ScholarshipCard'
import image from '../../images/photos/img.jpeg'
import SideBar from '../SideBar'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Top() {
    const { t, i18n } = useTranslation();

    var items = [
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
        <div className="top_content">
            <div className="main_content">
            <div className="filter">
                    <select name="country" id="" className="country">
                        <option >-- {t("detail.sel_country")} --</option>
                        <option value="canada">Canada</option>
                        <option value="china">China</option>
                        <option value="german">Germany</option>
                        <option value="usa">USA</option>
                    </select>
                    <select name="subcategory" id="" className="level">
                        <option >-- {t("detail.sel_cat")} --</option>
                        <option value="scholarhsip">{t("detail.scholarship")}</option>
                        <option value="university">{t("detail.university")}</option>
                        <option value="job">{t("detail.job")}</option>
                    </select>
                    <select name="domain" id="" className="level">
                        <option >-- {t("detail.sel_domain")} --</option>
                        <option value="electronic">Electronic Engineer</option>
                        <option value="mechanical">Mechanical Engineer</option>
                        <option value="computer">computer programmer</option>
                        <option value="design">Design Engineer</option>
                        <option value="teacher">Teacher</option>
                    </select>
                    <button type="button" className="button">{t("detail.find")}</button>
            </div>
            <RowItems data={items}/>
            </div>
            <div className="sidebar">
            <SideBar/>
            </div>
        </div>
    )
}

function RowItems(props){
    const { t, i18n } = useTranslation();
    return (
        <table>
            <tr>
                    <th>No</th>
                    <th>{t("detail.name")}</th>
                    <th>{t("detail.website")}</th>
            </tr>
            {
                props.data.map(function(item,index) {
                    return(
                        <tr>
                            <td><div className="order">{index + 1}</div></td>
                            <td><div className="description">
                                    <img src={item.img} alt=""/>
                                    <div className="name-place">
                                        {item.name}
                                        <p>{item.country}</p>
                                    </div>
                                </div>
                            </td>
                            <td><div className ="link">
                                <Link to={item.website}>{item.website}</Link>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
    )
}

export default Top
