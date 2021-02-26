import React from 'react'
import './style.css'
import ScholarshipCard from '../ScholarshipCard'
import SideBar from '../SideBar'
function University() {
    return (
        <div className="university_content">
            <div className="main_content">
            <div className="filter">
                    <select name="level" id="" className="level">
                        <option >-- select level --</option>
                        <option value="all">All</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="master">Master</option>
                        <option value="phd">PhD</option>
                        <option value="research">Research</option>
                    </select>
                    <select name="major" id="" className="type">
                        <option >-- select major --</option>
                        <option value="all">All</option>
                        <option value="electronic">Electonic Engineering</option>
                        <option value="medicine">Midecine</option>
                        <option value="computer">Computer Science</option>
                        <option value="design">Design</option>
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
            <div className="category">
                <div className="category_title"> 
                    {/* <div><h1>Universities</h1></div>
                    <div className="space"> </div> */}
                </div>
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
