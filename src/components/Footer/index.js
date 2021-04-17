import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import footerFr from '../../translation/fr/footer';
import footerEn from '../../translation/en/footer';

function Footer() {
    const { t, i18n } = useTranslation();
    var language = i18n.language;
   

    return (
        <div className="main_footer">
            {
                language ==='fr'?
                    <div className="footer_container">
                <div className="main_content">
                <div className="category">
                    <p>{footerFr[0].scholarship}</p>
                    <div><Link>{footerFr[0].africa}</Link></div>
                    <div><Link>{footerFr[0].america}</Link></div>
                    <div><Link>{footerFr[0].asia}</Link></div>
                    <div><Link>{footerFr[0].europe}</Link></div>
                    <div><Link>{footerFr[0].oceania}</Link></div>
                </div>
                <div className="category">
                    <p>{footerFr[0].free_univ}</p>
                    <div><Link>University of Ouaga</Link></div>
                    <div><Link>University of Paris</Link></div>
                    <div><Link>University of Accra</Link></div>
                    <div><Link>University of Beijing</Link></div>
                    <div><Link>University of Islamabad</Link></div>
                    <div><Link>University of NDjamena</Link></div>
                </div>
                <div className="category">
                    <p>{footerFr[0].advice}</p>
                    <div><Link>How to get Scholarship ?</Link></div>
                    <div><Link>How to get admission to university ?</Link></div>
                    <div><Link>The myths behind scholarships</Link></div>
                    <div><Link>How to choose your major ?</Link></div>
                    <div><Link>What are the Jobs of future ?</Link></div>
                </div>
                <div className="category">
                    <p>{footerFr[0].interview}</p>
                    <div><Link>Being student in China</Link></div>
                    <div><Link>How did I get admission to university ?</Link></div>
                    <div><Link>What are my plan for the future ?</Link></div>
                </div>
                <div className="category">
                <p>{footerFr[0].contacts}</p>
                <div>Email : campus@gmail.com</div>
                <div>Tel : +86 150 2209 4681</div>
                <div><Link>{footerFr[0]['term&conditions']}</Link></div>
                </div>
                </div>

                <div className="copyrigth">
                    <p>{footerFr[0].copyrigth}</p>
                </div>
            </div>:
             <div className="footer_container">
             <div className="main_content">
             <div className="category">
                 <p>{footerEn[0].scholarship}</p>
                 <div><Link>{footerEn[0].africa}</Link></div>
                 <div><Link>{footerEn[0].america}</Link></div>
                 <div><Link>{footerEn[0].asia}</Link></div>
                 <div><Link>{footerEn[0].europe}</Link></div>
                 <div><Link>{footerEn[0].oceania}</Link></div>
             </div>
             <div className="category">
                 <p>{footerEn[0].free_univ}</p>
                 <div><Link>University of Ouaga</Link></div>
                 <div><Link>University of Paris</Link></div>
                 <div><Link>University of Accra</Link></div>
                 <div><Link>University of Beijing</Link></div>
                 <div><Link>University of Islamabad</Link></div>
                 <div><Link>University of NDjamena</Link></div>
             </div>
             <div className="category">
                 <p>{footerEn[0].advice}</p>
                 <div><Link>How to get Scholarship ?</Link></div>
                 <div><Link>How to get admission to university ?</Link></div>
                 <div><Link>The myths behind scholarships</Link></div>
                 <div><Link>How to choose your major ?</Link></div>
                 <div><Link>What are the Jobs of future ?</Link></div>
             </div>
             <div className="category">
                 <p>{footerEn[0].interview}</p>
                 <div><Link>Being student in China</Link></div>
                 <div><Link>How did I get admission to university ?</Link></div>
                 <div><Link>What are my plan for the future ?</Link></div>
             </div>
             <div className="category">
             <p>{footerEn[0].contacts}</p>
             <div>Email : campus@gmail.com</div>
             <div>Tel : +86 150 2209 4681</div>
             <div><Link>{footerEn[0]['term&conditions']}</Link></div>
             </div>
             </div>

             <div className="copyrigth">
                 <p>{footerEn[0].copyrigth}</p>
             </div>
         </div>

            }
        </div>
        
    )
}

export default Footer
