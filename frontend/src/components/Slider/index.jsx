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