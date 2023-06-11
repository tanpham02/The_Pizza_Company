import { Link } from "react-router-dom"
import { navs } from "../Navigation"
import './menu.scss'
const Menu = ({ showSidebar }) => {



    return (
        <div className={`menu ${showSidebar ? 'active' : ''}`}>
            <ul className="menu__lists">
                {navs.map(nav => (
                    <li key={nav.id} className='menu__item'>
                        <Link to={nav.path} className="menu__link">
                            {nav.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mid-menu">
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

            <div className="right-menu">
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
            </div>
        </div>
    )
}

export default Menu