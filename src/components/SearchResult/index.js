import React from 'react'
import './style.css'
import ScholarshipCard from '../ScholarshipCard'
function SearchResult() {
    return (
        <div className="home_container">
            <div className="home_scholarship">
                <h1>New Scholarship</h1>
                <div className="items">
                    <ScholarshipCard/>
                    <ScholarshipCard/>
                    <ScholarshipCard/>
                    <ScholarshipCard/>
                    <ScholarshipCard/>

                </div>
            </div>
            <div className="home_university">

            </div>
            <div className="home_country">

            </div>
            <div className="home_job">

            </div>
        </div>
    )
}

export default SearchResult
