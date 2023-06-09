import Header from "../../components/Header"
import Slider from "../../components/Slider"
import HomeProducts from "../../components/HomeProducts"

const sliders = [
    {
        id: 1,
        url: '/assets/img/sliders/combo-tien-loi.png'
    },
    {
        id: 2,
        url: '/assets/img/sliders/pizza-vuon-my-vi.png'
    },
    {
        id: 3,
        url: '/assets/img/sliders/Website-banner-BOGO-1.png'
    },
    {
        id: 4,
        url: '/assets/img/sliders/Website-banner-BOGO-2.png'
    },
    {
        id: 5,
        url: '/assets/img/sliders/NewYork-pizza-big-size.png'
    },
    {
        id: 6,
        url: '/assets/img/sliders/BannerSlider_CHICKEN KOREAN.png'
    },
    {
        id: 7,
        url: '/assets/img/sliders/Birthday_Party.png'
    },
    {
        id: 8,
        url: '/assets/img/sliders/giao-hang-nhanh.png'
    },
]

const Home = () => {
    return (
        <>
            <Header />
            <Slider sliders={sliders} />
            <HomeProducts />
        </>
    )
}

export default Home