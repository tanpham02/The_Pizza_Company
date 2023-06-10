import Slu from "react-slick";
import './slider.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

const Slider = ({ sliders }) => {

    useEffect(() => {
        const btnSlick = document.querySelectorAll('.slider .slick-slider button')
        btnSlick.forEach(btn => {
            if (btn.closest('.slick-arrow.slick-prev')) {
                btn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'
            }
            if (btn.closest('.slick-arrow.slick-next')) {
                btn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
            }
        })
    }, [])


    const settings = {
        className: "center",
        centerMode: true,
        autoplay: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    centerPadding: '15px 0px 15px',
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    centerPadding: '11px 0px 14px',
                    centerMode: true,
                    slidesToShow: 1,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '10px',
                    centerMode: true,
                    slidesToShow: 1,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '10px',
                    centerMode: true,
                    slidesToShow: 1,
                    dots: true
                }
            },

        ],
        centerPadding: "200px", // 160px
        slidesToShow: 1,
        speed: 1300,
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