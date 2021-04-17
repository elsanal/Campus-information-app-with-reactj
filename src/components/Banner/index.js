import React from 'react'
import ImageGallery from 'react-image-gallery';
import './style.css'
import SearchBar from '../SearchBar'

const images = [
    {
        original :'https://images.pexels.com/photos/3059651/pexels-photo-3059651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=3000'

    },
    {
        original: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=3000'
    },
    {
        original:'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=3000'
    },
    {
        original : 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=3000'
    }

]


function Banner() {
    return (
        <div className="banner_container">
            <SearchBar/>
            <ImageGallery className="img"
                showFullscreenButton = {false}
                showPlayButton = {false}
                showThumbnails = {false}
                showBullets = {false}
                showNav = {false}
                slide = {true}
                autoPlay = {true}
                slideInterval = {10000}
                items = {images}
            />
        </div>
    )
}

export default Banner