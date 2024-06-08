import React from 'react';
import logo from '../assets/logos/kkhtLogo.png'
import '../styles/Banner.css';

function Banner() {
    const bannerTitle = 'きらきら星店';
    return (
        <div className='kkht-banner'>
          <div id='bannerOpacity'>
            <img className='bannerLogo' src={logo} alt=''></img>
            <h1 id='bannerTitle'>{bannerTitle}</h1>
          </div>
        </div>
    );
}

export default Banner;

