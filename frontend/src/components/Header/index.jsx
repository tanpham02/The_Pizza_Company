import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import './header.scss'
import { useState, useEffect } from 'react'
import Menu from '../Menu'
import axios from 'axios'


const Header = () => {
    const [active, setActive] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    const [address, setAddress] = useState([])
    const [valueAddress, setValueAddress] = useState('')

    const handleShowInput = () => {
        setActive(!active)
    }

    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const handleChangeOrderType = () => {
        const btnOrder = document.querySelectorAll('.btn-order')
        const inputAddress = document.querySelectorAll('.mid-header .address')
        btnOrder.forEach((btn, index) => {
            btn.classList.contains('active') ?
                btn.classList.remove('active') :
                btn.classList.add('active')

            inputAddress[index].classList.contains('active') ?
                inputAddress[index].classList.remove('active') :
                inputAddress[index].classList.add('active')
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios('http://localhost:5001/api/storesSystem')
            const data = await res.data
            setAddress(data)
        }
        fetchData()
    }, [])

    const handleSetAddress = name => {
        setValueAddress(name)
    }

    const handleChangeAddress = e => {
        setValueAddress(e.target.value)
    }



    return (
        <>
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
                                <button
                                    className="btn btn-order order__delivery active"
                                    onClick={handleChangeOrderType}
                                >
                                    <i className="fa-solid fa-truck"></i>
                                    Đặt giao hàng
                                </button>
                                <button
                                    className="btn btn-order order__to-get"
                                    onClick={handleChangeOrderType}
                                >
                                    <i className="fa-solid fa-box-archive"></i>
                                    Đặt đến lấy
                                </button>
                            </div>

                            <div className="address active">
                                <i className="fa-sharp fa-solid fa-location-dot"></i>
                                <input type="text" placeholder='Nhập địa chỉ của bạn' />
                            </div>
                            <div className="address" style={{ position: 'relative', paddingLeft: 14 }}>
                                <i style={{ fontSize: 16 }} className="fa-solid fa-house"></i>
                                <input
                                    value={valueAddress}
                                    type="text"
                                    placeholder='Nhập cửa hàng'
                                    onChange={handleChangeAddress}
                                />

                                <ul className='address__lists' >
                                    {address.map(addressItem =>
                                        <li
                                            key={addressItem.id}
                                            className='address__item'
                                            onClick={() => handleSetAddress(addressItem.name)}
                                        >
                                            {addressItem.name}
                                        </li>
                                    )}


                                </ul>
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
                            <ul className={`side-bar ${showSidebar ? 'show' : ''}`}>
                                <div className="nav__right">
                                    <div
                                        className={`search ${active ? 'active' : ''}`}
                                        onClick={handleShowInput}
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

                                <div
                                    className={`side-bar__icon`}
                                    onClick={handleShowSidebar}
                                >
                                    <span></span>
                                    <span className='span-middle'></span>
                                    <span></span>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <Navigation />
                </div>
            </div>
            <Menu showSidebar={showSidebar} />
        </>
    )
}

export default Header   