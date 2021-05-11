import React from 'react'
import './style.css'
import SideBar from '../../Components/SideBar'
function Home() {
    return (
        <div className="home_content">
            <div className="main_content">
            <div className="category">
                <div className="category_title"> 
                    <div><h1>New Scholarship</h1></div>
                    <div className="space"> </div>
                </div>
                <div className="items">
                   
                </div>
            </div>
            <div className="category">
            <div className="category_title"> 
                    <div><h1>Universities or Instituts</h1></div>
                    <div className="space"> </div>
                </div>
                <div className="items">
                {/* <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article> */}
                </div>
            </div>
            <div className="category">
            <div className="category_title"> 
                    <div><h1>Jobs & Opportunities</h1></div>
                    <div className="space"> </div>
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

export default Home
