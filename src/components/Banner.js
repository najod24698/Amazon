import React from 'react';
import '../styles/Banner.css';
import {useState} from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';  // left
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'; //rihgt

function Banner({all}) {

    const [img, setImg] = useState(0);
    
    const prev = (e) => {

        const imageBanner = document.querySelector('.banner_image');

        if( img === 0 ) {
            setImg(3)
        }
        else {
            setImg(prev => prev - 1);
        }

        imageBanner.classList.add("trans");
        setTimeout(() => {
            imageBanner.classList.remove("trans");
        },400)
    };

    const next = (e) => {

        const imageBanner = document.querySelector('.banner_image');

        if( img === 3 ) {
            setImg(0)
        }
        else {
            setImg(prev => prev + 1);
        }

        imageBanner.classList.add("transLeft");
        setTimeout(() => {
            imageBanner.classList.remove("transLeft");
        },400)
    }


    return (
        <div className="banner">
            <button className="arrow left-a" onClick={prev}><ArrowBackIosIcon style={{fontSize: "40px"}} /></button>
            <img src={all[img].image} alt="" className="banner_image" />
            <button className="arrow right-a" onClick={next}><ArrowForwardIosIcon  style={{fontSize: "40px"}} /></button>
        </div>
    )
}

export default Banner
