import React from 'react'
import './style.css'
// import ScholarshipCard from '../ScholarshipCard'
import SideBar from '../../Components/SideBar'
function Abroad() {
    return (
        <div className="job_content">
            <div className="main_content">
            <div className="filter">
                    <select name="country" id="" className="country">
                        <option >--select country--</option>
                        <option value="canada">Canada</option>
                        <option value="china">China</option>
                        <option value="german">Germany</option>
                        <option value="usa">USA</option>
                    </select>
                    <select name="domain" id="" className="level">
                        <option >--select domain--</option>
                        <option value="electronic">Electronic Engineer</option>
                        <option value="mechanical">Mechanical Engineer</option>
                        <option value="computer">computer programmer</option>
                        <option value="design">Design Engineer</option>
                        <option value="teacher">Teacher</option>
                    </select>
                    <select name="salary" id="" className="type">
                        <option >--select salary--</option>
                        <option value="1000"> less than 1000 USD</option>
                        <option value="2000">1000 ~ 2000 USD</option>
                        <option value="5000">2000 ~ 5000 USD</option>
                        <option value="+5000">+5000 USD</option>
                    </select>
                    
                    <button type="button" className="button">Find</button>
                </div>
            <div className="category">
                <div className="category_title"> 
                    {/* <div><h1>Universities</h1></div>
                    <div className="space"> </div> */}
                </div>
                <div className="items">
                    {/* <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
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

export default Abroad
