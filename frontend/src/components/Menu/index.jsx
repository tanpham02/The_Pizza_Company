import { Link } from "react-router-dom"
import { navs } from "../Navigation"
import './menu.scss'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { storesSystemSelectors } from "../../redux/selectors"
import {
    filterByName,
    getAllStoresSystemThunk
} from "../StoresSystem/storesSystemSlice"
const Menu = ({ showSidebar }) => {
    const [valueAddress, setValueAddress] = useState('')
    const storesSystem = useSelector(storesSystemSelectors)
    const dispatch = useDispatch()
    const [showListAdd, setShowListAdd] = useState(false)


    useEffect(() => {
        dispatch(getAllStoresSystemThunk())
    }, [])

    const handleChangeOrderType = (e) => {
        const btnOrder = document.querySelectorAll('.mid-menu button.btn-order')
        const inputAddress = document.querySelectorAll('.mid-menu .address')

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