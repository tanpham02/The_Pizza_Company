import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import './header.scss'


const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__main">
                    <Link to='/' className="logo">
                        <Link to='/'>
                            <img src='../../../public/assets/img/logo/logo-main.png' alt="The Pizza Company" />
                        </Link>
                    </Link>

                    <div className="mid-header">
                        <div className="order">
                            <button className="btn order__delivery active">
                                <i className="fa-solid fa-truck"></i>
                                Đặt giao hàng
                            </button>
                            <button className="btn order__to-get ">
                                <i className="fa-solid fa-box-archive"></i>
                                Đặt đến lấy
                            </button>
                        </div>

                        <div className="address">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                            <input type="text" placeholder='Nhập địa chỉ của bạn' />
                        </div>
                    </div>

                    <div className="right-header">
                        <div className='contain'>

                            <div className="icon">
                                <i className="fa-regular fa-user"></i>
                            </div>
                            <div className="account">
                                <Link to='/'>
                                    Đăng nhập
                                </Link>
                                <Link to='/'>
                                    Tạo tài khoản
                                </Link>
                            </div>

                            <div className='language'>
                                <img width={16} height={11} src="../../../public/assets/img/locale-lang/EN.png" alt="English" />
                            </div>
                        </div>
                        <ul className="side-bar">
                            <div className="nav__right">
                                <div
                                    className={`search`}
                                    // onClick={handleShowInput}
                                >
                                    <i className="search__icon fa-solid fa-magnifying-glass"></i>
                                    <div
                                        className="search__input"
                                        onClick={e => e.stopPropagation()}
                                    >
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

                            <div className="side-bar__icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </ul>
                    </div>


                </div>
                <Navigation />
            </div>
        </div>
    )
}

export default Header   