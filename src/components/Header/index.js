import React, {Suspense} from 'react'
import './style.css'
import Banner from '../Banner'
import SearchBar from '../SearchBar'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
// import U from '../../advice'





function Header() {
       
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }; 
    
        
    return (
        <Suspense fallback="loading">
        <div className="header_container">
            <div className="header_topItems">
                <ul>
                    <Link to='/career-salary'><li>{t('Career.1')}</li></Link>
                    <Link to='/study-abroad'><li>{t('Abroad.1')}</li></Link>
                    <Link to='/student-life'><li>{t('Life.1')}</li></Link>
                </ul>
            </div>
            <div className="header_midleItems">
                  <Banner/>
                  {/* <SearchBar/> */}
                  <select className="language" onChange={(e)=>changeLanguage(e.target.value)}>
                      <option value="en" >English</option>
                      <option value="fr" >Français</option>
                  </select>      
            </div>
            <div className="header_bottomItems">
                <ul>
                    <Link to='/home'><li>{t("Home.1")}</li></Link>
                    <Link to='/scholarship'><li>{t('Scholarships.1')}</li></Link>
                    <Link to='/university'><li>{t("Universities.1")}</li></Link>
                    <Link to='/top'><li>{t("Top.1")}</li></Link> 
                    <Link to='/job'><li>{t("Jobs.1")}</li></Link>
                    <Link to='/advice'><li>{t("Advices.1")}</li></Link>
                    <Link to='/about'><li>{t("About.1")}</li></Link>   
                </ul>
            </div>
        </div>
       
        </Suspense>
    )
}

export default Header
