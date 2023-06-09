import { Link } from 'react-router-dom'
import './homeProducts.scss'
import Promotions from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useRef } from 'react'

const HomeProducts = () => {
    const slickRef = useRef()
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }


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
                btn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'
            }
            if (btn.closest('.slick-arrow.slick-next')) {
                btn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
            }
        })
    }, [])

    useEffect(() => {
        const nodes = document.querySelectorAll('.promotions .slick-slider button[tabindex="-1"]')
        nodes.forEach(node => {
            const parent = node.parentElement
            parent.parentElement.remove()
        })
    }, [])


    return (
        <div className='home-products'>
            <div className="products promotions">
                <h3 className='promotions__title'>Khuyến mãi, Combo</h3>
                <Promotions ref={slickRef} {...settings}>

                    <div className='products__container'>
                        <img width={240} height={240} src="/assets/img/products/pizza/pizza-5-loai-thit-dac-biet-rau-cu.png" alt="" />
                        <div className="products__contents">
                            <Link to='#' className="contents__name">Mua 1 Tặng 1 Pizza size M - Thứ 3</Link>
                            <span className="contents__desc">
                                Tiết kiệm: 42% (phù hợp cho 2-3 người).
                                Combo sẽ bao gồm: 1 Pizza Classic, cỡ Nhỏ.
                                1 Mỳ Ý bất kỳ .
                                1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi.
                                1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.
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
                                    459.000đ
                                </span>
                            </div>

                            <button className='btn btn-buynow'>
                                Mua ngay
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className='products__container'>
                        <img width={240} height={240} src="/assets/img/products/pizza/pizza-5-loai-thit-dac-biet-rau-cu.png" alt="" />
                        <div className="products__contents">
                            <Link to='#' className="contents__name">Mua 1 Tặng 1 Pizza size M - Thứ 3</Link>
                            <span className="contents__desc">
                                Tiết kiệm: 42% (phù hợp cho 2-3 người).
                                Combo sẽ bao gồm: 1 Pizza Classic, cỡ Nhỏ.
                                1 Mỳ Ý bất kỳ .
                                1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi.
                                1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.
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
                                    459.000đ
                                </span>
                            </div>

                            <button className='btn btn-buynow'>
                                Mua ngay
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className='products__container'>
                        <img width={240} height={240} src="/assets/img/products/pizza/pizza-5-loai-thit-dac-biet-rau-cu.png" alt="" />
                        <div className="products__contents">
                            <Link to='#' className="contents__name">Mua 1 Tặng 1 Pizza size M - Thứ 3</Link>
                            <span className="contents__desc">
                                Tiết kiệm: 42% (phù hợp cho 2-3 người).
                                Combo sẽ bao gồm: 1 Pizza Classic, cỡ Nhỏ.
                                1 Mỳ Ý bất kỳ .
                                1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi.
                                1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.
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
                                    459.000đ
                                </span>
                            </div>

                            <button className='btn btn-buynow'>
                                Mua ngay
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className='products__container'>
                        <img width={240} height={240} src="/assets/img/products/pizza/pizza-5-loai-thit-dac-biet-rau-cu.png" alt="" />
                        <div className="products__contents">
                            <Link to='#' className="contents__name">Mua 1 Tặng 1 Pizza size M - Thứ 3</Link>
                            <span className="contents__desc">
                                Tiết kiệm: 42% (phù hợp cho 2-3 người).
                                Combo sẽ bao gồm: 1 Pizza Classic, cỡ Nhỏ.
                                1 Mỳ Ý bất kỳ .
                                1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi.
                                1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.
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
                                    459.000đ
                                </span>
                            </div>

                            <button className='btn btn-buynow'>
                                Mua ngay
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className='products__container'>
                        <img width={240} height={240} src="/assets/img/products/pizza/pizza-5-loai-thit-dac-biet-rau-cu.png" alt="" />
                        <div className="products__contents">
                            <Link to='#' className="contents__name">Mua 1 Tặng 1 Pizza size M - Thứ 3</Link>
                            <span className="contents__desc">
                                Tiết kiệm: 42% (phù hợp cho 2-3 người).
                                Combo sẽ bao gồm: 1 Pizza Classic, cỡ Nhỏ.
                                1 Mỳ Ý bất kỳ .
                                1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi.
                                1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.
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
                                    459.000đ
                                </span>
                            </div>

                            <button className='btn btn-buynow'>
                                Mua ngay
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className='products__container'>
                        <img width={240} height={240} src="/assets/img/products/pizza/pizza-5-loai-thit-dac-biet-rau-cu.png" alt="" />
                        <div className="products__contents">
                            <Link to='#' className="contents__name">Mua 1 Tặng 1 Pizza size M - Thứ 3</Link>
                            <span className="contents__desc">
                                Tiết kiệm: 42% (phù hợp cho 2-3 người).
                                Combo sẽ bao gồm: 1 Pizza Classic, cỡ Nhỏ.
                                1 Mỳ Ý bất kỳ .
                                1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi.
                                1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.
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
                                    459.000đ
                                </span>
                            </div>

                            <button className='btn btn-buynow'>
                                Mua ngay
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className='products__container'>
                        <img width={240} height={240} src="/assets/img/products/pizza/pizza-5-loai-thit-dac-biet-rau-cu.png" alt="" />
                        <div className="products__contents">
                            <Link to='#' className="contents__name">Mua 1 Tặng 1 Pizza size M - Thứ 3</Link>
                            <span className="contents__desc">
                                Tiết kiệm: 42% (phù hợp cho 2-3 người).
                                Combo sẽ bao gồm: 1 Pizza Classic, cỡ Nhỏ.
                                1 Mỳ Ý bất kỳ .
                                1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi.
                                1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.
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
                                    459.000đ
                                </span>
                            </div>

                            <button className='btn btn-buynow'>
                                Mua ngay
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className='products__container'>
                        <img width={240} height={240} src="/assets/img/products/pizza/pizza-5-loai-thit-dac-biet-rau-cu.png" alt="" />
                        <div className="products__contents">
                            <Link to='#' className="contents__name">Mua 1 Tặng 1 Pizza size M - Thứ 3</Link>
                            <span className="contents__desc">
                                Tiết kiệm: 42% (phù hợp cho 2-3 người).
                                Combo sẽ bao gồm: 1 Pizza Classic, cỡ Nhỏ.
                                1 Mỳ Ý bất kỳ .
                                1 Khoai tây chiên/ Khoai tây chiên lắc phô mai/ Bánh mì que nướng/ Bánh mỳ bơ tỏi.
                                1 Bánh Phô mai xoắn/ Gà Giòn Không Xương/ Gà Giòn Không Xương Lắc Phô Mai/ Gà Popcorn/ Gà Popcorn Lắc Phô Mai.
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
                                    459.000đ
                                </span>
                            </div>

                            <button className='btn btn-buynow'>
                                Mua ngay
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={handlePrevSlider}
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button
                        onClick={handleNextSlider}
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>

                </Promotions>
            </div>
        </div>
        // <div>
        //     <h2> Multiple items </h2>
        //     <Promotions {...settings}>
        //         <div>
        //             <h3>1</h3>
        //         </div>
        //         <div>
        //             <h3>2</h3>
        //         </div>
        //         <div>
        //             <h3>3</h3>
        //         </div>
        //         <div>
        //             <h3>4</h3>
        //         </div>
        //         <div>
        //             <h3>5</h3>
        //         </div>
        //         <div>
        //             <h3>6</h3>
        //         </div>
        //         <div>
        //             <h3>7</h3>
        //         </div>
        //         <div>
        //             <h3>8</h3>
        //         </div>
        //         <div>
        //             <h3>9</h3>
        //         </div>
        //     </Promotions>
        // </div>
    )
}

export default HomeProducts