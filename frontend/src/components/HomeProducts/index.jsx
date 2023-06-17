import { Link } from 'react-router-dom'
import './homeProducts.scss'
import Promotions from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzaThunk } from '../Pizza/pizzaSlice';
import { pizzaSelector } from '../../redux/selectors';

const HomeProducts = () => {
    const slickRef = useRef()
    const dispatch = useDispatch()
    const pizzaLists = useSelector(pizzaSelector)
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    }

    useEffect(() => {
        dispatch(getAllPizzaThunk())
    }, [])


    const handlePrevSlider = () => {
        slickRef.current.slickPrev()
    }

    const handleNextSlider = () => {
        slickRef.current.slickNext()
    }

    useEffect(() => {
        const btnSlick = document.querySelectorAll('.promotions .slick-slider button')
        btnSlick.forEach(btn => {
            if (btn.closest('.slick-arrow.slick-prev')) {
                btn.remove()
            }
            if (btn.closest('.slick-arrow.slick-next')) {
                btn.remove()
            }
        })
    }, [])

    useEffect(() => {
        const nodes = document.querySelectorAll('.promotions .slick-slider button[tabindex="-1"]')
        nodes.forEach(node => {
            const parent = node.parentElement
            parent.parentElement.style.display = 'none'
        })
    }, [])

    return (
        <div className='home-products'>
            <div className="products promotions">
                <h3 className='promotions__title'>Pizza - Hơn 18 loại</h3>
                <button
                    onClick={handlePrevSlider}
                    className='slick-prev-custom'
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <Promotions ref={slickRef} {...settings}>
                    {pizzaLists.map(pizza => (
                        <>
                            <div className='products__container'>
                                <img src={pizza.urlImage} alt={pizza.name} />
                                <div className="products__introduced">
                                    <div className="products__contents">
                                        <Link to='#' className="contents__name">{pizza.name}</Link>
                                        <span className="contents__desc">
                                            {pizza.information}
                                        </span>
                                    </div>
                                    <div className="products__footer">
                                        <div className="footer__prices">
                                            <label>
                                                Giá chỉ từ
                                                <span className="prices__old">
                                                    586.000đ
                                                </span>
                                            </label>
                                            <span className="prices__actual">
                                                {Number(pizza.prices).toLocaleString('VI')}đ
                                            </span>
                                        </div>

                                        <button className='btn btn-buynow'>
                                            Mua ngay
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </Promotions>
                <button
                    onClick={handleNextSlider}
                    className='slick-next-custom'
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default HomeProducts