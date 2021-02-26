import React from 'react'
import './style.css'
import image from '../../images/photos/img.jpeg'
import ScholarshipDetail from '../ScholarshipDetail'
import {Link} from 'react-router-dom'



function ScholarshipCard(props) {
    return (
        <div className="card_container" >
            <img src={image} alt=""/>
            <div className="description">
                <h1>Title</h1>
                <h3>Deadline</h3>
                <Link to='/detail'>
                    <button type="button" className="apply" >Apply Now</button>
                </Link>
            </div>
        </div>
    )
}

export default ScholarshipCard
