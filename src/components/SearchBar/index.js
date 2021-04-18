import React from 'react'
import './style.css'
import { useTranslation } from 'react-i18next';
function SearchBar() {
    const { t, i18n } = useTranslation();
    return (
        
        <div className="banner_search">
            <input type="text" className="search_bar" placeholder={t('search.placeholder')}/>
            <button class="upload_button" type="button">{t('search.button')}</button>
        </div>
        
    )
}

export default SearchBar
