import Slu from "react-slick";
import './slider.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useState } from "react";

const Slider = ({ sliders }) => {

    const settings = {
        className: "center",
        centerMode: true,
        autoplay: true,
        infinite: true,
        centerPadding: "200px",
        slidesToShow: 1,
        speed: 700,
    };

    return (
        <div className="slider">
            <Slu {...settings}>
                {sliders.map(slider => <img key={slider.id} src={slider.url} alt='' />)}
            </Slu>
        </div>
    )
}

export default Slider