import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className="footer_container">
            <div className="main_content">
            <div className="category">
                <p>Scholarships</p>
                <div><Link>Africa</Link></div>
                <div><Link>America</Link></div>
                <div><Link>Asia</Link></div>
                <div><Link>Europe</Link></div>
                <div><Link>Oceania</Link></div>
            </div>
            <div className="category">
                <p>Top Free Universities</p>
                <div><Link>University of Ouaga</Link></div>
                <div><Link>University of Paris</Link></div>
                <div><Link>University of Accra</Link></div>
                <div><Link>University of Beijing</Link></div>
                <div><Link>University of Islamabad</Link></div>
                <div><Link>University of NDjamena</Link></div>
            </div>
            <div className="category">
                <p>Advise</p>
                <div><Link>How to get Scholarship ?</Link></div>
                <div><Link>How to get admission to university ?</Link></div>
                <div><Link>The myths behind scholarships</Link></div>
                <div><Link>How to choose your major ?</Link></div>
                <div><Link>What are the Jobs of future ?</Link></div>
            </div>
            <div className="category">
                <p>Interviews</p>
                <div><Link>Being student in China</Link></div>
                <div><Link>How did I get admission to university ?</Link></div>
                <div><Link>What are my plan for the future ?</Link></div>
            </div>
            <div className="category">
               <p>Contacts</p>
               <div>Email : campus@gmail.com</div>
               <div>Tel : +86 150 2209 4681</div>
               <div><Link>Term and Conditions</Link></div>
            </div>
            </div>

            <div className="copyrigth">
                <p>Copyright® 2021. All rights reserved - Campus+</p>
            </div>
        </div>
    )
}

export default Footer
