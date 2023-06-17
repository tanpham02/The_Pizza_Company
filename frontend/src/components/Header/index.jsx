import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import './header.scss'
import { useState, useEffect } from 'react'
import Menu from '../Menu'
import { useDispatch, useSelector } from 'react-redux'
import { storesSystemSelectors } from '../../redux/selectors'
import {
    getAllStoresSystemThunk,
    filterByName
} from '../StoresSystem/storesSystemSlice'

const Header = () => {
    const [active, setActive] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    const [valueAddress, setValueAddress] = useState('')
    const storesSystem = useSelector(storesSystemSelectors)
    const [showListAdd, setShowListAdd] = useState(false)
    const dispatch = useDispatch()

    const handleShowInput = () => {
        setActive(!active)
    }

    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    useEffect(() => {
        dispatch(getAllStoresSystemThunk())
    }, [])

    const handleChangeOrderType = (e) => {
        const btnOrder = document.querySelectorAll('.mid-header button.btn-order')
        const inputAddress = document.querySelectorAll('.mid-header .address')

        btnOrder.forEach(btn => {
            btn.classList.contains('active')
            btn.classList.remove('active')
            if (btn) {
                e.target.classList.add('active')
            }
            if (e.target !== btn) {
                e.target.parentElement.classList.add('active')
            }
            if (btn.closest('.order__to-get')) {
                inputAddress.forEach(input =>
                    input.classList.contains('active') ?
                        input.classList.remove('active') :
                        input.classList.add('active')
                )
            }
        })
    }

    const handleFindAddress = (e) => {
        setValueAddress(e.target.value)
        dispatch(filterByName(e.target.value))
    }

    useEffect(() => {
        if (valueAddress.length > 0) {
            storesSystem.filter(store => {
                if (store.name === valueAddress.trim()) {
                    setShowListAdd(true)
                }
            })
            return
        }
        setShowListAdd(false)
        return
    }, [valueAddress])


    return (
        <>
            <div className="header">
                <div className="header__container">
                    <div className="header__main">
                        <Link to='/' className="logo">
                            <Link to='/'>
                                <img src='/assets/img/logo/logo-main.png' alt="The Pizza Company" />
                            </Link>
                        </Link>

                        <div className="mid-header">
                            <div className="order">
                                <button
                                    className="btn btn-order order__delivery active"
                                    onClick={handleChangeOrderType}
                                >
                                    <i
                                        className="fa-solid fa-truck"
                                    ></i>
                                    Đặt giao hàng
                                </button>
                                <button
                                    className="btn btn-order order__to-get"
                                    onClick={handleChangeOrderType}
                                >
                                    <i
                                        className="fa-solid fa-box-archive"
                                    ></i>
                                    Đặt đến lấy
                                </button>
                            </div>

                            <div className="address active">
                                <i className="fa-sharp fa-solid fa-location-dot"></i>
                                <input type="text" placeholder='Nhập địa chỉ của bạn' />
                            </div>
                            <div
                                onClick={e => e.stopPropagation()}
                                className="address"
                                style={{
                                    position: 'relative',
                                    paddingLeft: 14
                                }}
                            >
                                <i style={{ fontSize: 16 }} className="fa-solid fa-house"></i>
                                <input
                                    value={valueAddress}
                                    type="text"
                                    placeholder='Nhập cửa hàng'
                                    onChange={handleFindAddress}
                                    onFocus={() => setShowListAdd(false)}
                                    onBlur={() => setShowListAdd(true)}
                                />

                                {(storesSystem && !showListAdd) &&
                                    <ul
                                        className='address__lists'
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setShowListAdd(false)
                                        }}
                                    >
                                        {storesSystem.map(addressItem =>
                                            <li
                                                key={addressItem.id}
                                                className='address__item'
                                                onMouseDown={() => setValueAddress(addressItem.name)}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setShowListAdd(false)
                                                }}
                                            >
                                                {addressItem.name}
                                            </li>
                                        )}
                                    </ul>
                                }
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
                                    <img width={16} height={11} src="/assets/img/locale-lang/EN.png" alt="English" />
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

                                    <Link to='/cart' className="carts" >
                                        <i className="carts__icon fa-solid fa-cart-shopping">
                                            <span></span>
                                        </i>
                                        <span className="carts__label">Giỏ hàng</span>
                                        <span className="carts__amounts">0</span>
                                    </Link>
                                </div>

                                <div
                                    className={`side-bar__icon`}
                                    onClick={handleShowSidebar}
                                >
                                    <span className='span-left'></span>
                                    <span className='span-middle'></span>
                                    <span className='span-right'></span>
                                </div>

                            </ul>
                        </div>
                    </div>
                    <Navigation />
                </div>
                <Menu showSidebar={showSidebar} />
            </div>
                                
        </>
    )
}

export default Header   