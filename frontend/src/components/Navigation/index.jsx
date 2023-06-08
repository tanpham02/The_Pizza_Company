import { Link } from 'react-router-dom'
import './navigation.scss'

const navs = [
    {
        id: 1,
        name: 'Khuyến mãi',
        path: '/promotions'
    },
    {
        id: 2,
        name: 'Combo Tiện & Lợi',
        path: '/combo-tien-loi'
    },
    {
        id: 3,
        name: 'Pizza',
        path: '/pizza'
    },
    {
        id: 4,
        name: 'Gà Giòn',
        path: '/to-korean-chicken-style'
    },
    {
        id: 5,
        name: 'Khai vị',
        path: '/khai-vi'
    },
    {
        id: 6,
        name: 'Mỳ Ý',
        path: '/my-y'
    },
    {
        id: 7,
        name: 'Salad',
        path: '/salad'
    },
    {
        id: 8,
        name: 'Thức uống',
        path: '/thuc-uong'
    },
    {
        id: 9,
        name: 'Thật Chất',
        path: '/menu-that-chat'
    },
]

const Navigation = () => {

    return (
        <nav className="nav">
            <div className="nav__left">
                <ul className="lists">
                    {navs.map(nav => (
                        <li key={nav.id} className='item'>
                            <Link to={nav.path}>
                                {nav.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="nav__right">
                <div className="search">
                    <i className="search__icon fa-solid fa-magnifying-glass"></i>
                    <div className="search__input">
                        <input type="text" placeholder='Tìm kiếm sản phẩm' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                <div className="carts">
                    <i className="carts__icon fa-solid fa-cart-shopping"></i>
                    <span className="carts__label">Giỏ hàng</span>
                    <span className="carts__amounts">0</span>
                </div>
            </div>
        </nav>
    )
}

export default Navigation