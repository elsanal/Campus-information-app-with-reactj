import React from 'react'
import './style.css'
import ScholarshipCard from '../ScholarshipCard'
import image from '../../images/photos/img.jpeg'
import SideBar from '../SideBar'
import {Link} from 'react-router-dom'
function Top() {
    var elements = [rowItems,rowItems,rowItems,rowItems,rowItems];
    var rows = [];
for (const [index, value] of elements.entries()) {
    rows.push(<li className="category_title11" key={index}>{value}</li>);
}
    return (
        <div className="top_content">
            <div className="main_content">
            <div className="filter">
                    <select name="country" id="" className="country">
                        <option >-- select country or region --</option>
                        <option value="canada">Canada</option>
                        <option value="china">China</option>
                        <option value="german">Germany</option>
                        <option value="usa">USA</option>
                    </select>
                    <select name="subcategory" id="" className="level">
                        <option >-- select subcategory --</option>
                        <option value="scholarhsip">Scholarship</option>
                        <option value="university">University</option>
                        <option value="job">Job</option>
                    </select>
                    <select name="domain" id="" className="level">
                        <option >-- select domain --</option>
                        <option value="electronic">Electronic Engineer</option>
                        <option value="mechanical">Mechanical Engineer</option>
                        <option value="computer">computer programmer</option>
                        <option value="design">Design Engineer</option>
                        <option value="teacher">Teacher</option>
                    </select>
                    <button type="button" className="button">Find</button>
            </div>
            <div className="category">
                <div className="title">
                    <div>No</div>
                    <div>Name </div>
                    <div>Website</div>
                </div>
                <div className="item_row">
                    <div className="order">1</div>
                    <div className="description">
                        <img src={image} alt=""/>
                        <div className="name-place">
                            Tsing Hua
                            <p>China</p>
                        </div>
                    </div>
                    <div className ="link">
                        <Link to="www.tsinghua.cn">www.tsinghua.cn</Link>
                        </div>
                </div>
                
                
                
            </div>
            </div>
            <div className="sidebar">
            <SideBar/>
            </div>
        </div>
    )
}

function rowItems(){
    return (
        <div >
                    <div>2</div>
                    <div>Beihang</div>
                    <div>China</div>
                </div>
    )
}

export default Top
