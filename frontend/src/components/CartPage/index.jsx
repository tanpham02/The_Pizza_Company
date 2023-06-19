import './index.scss'
const CartPage = () => {
    return (
        <div className='shopping-carts-page have-carts'>
            {/* <div className="shopping-carts-page__empty">
                <h3 className='cart-empty__title'>Rất tiếc!!! Bạn không có sản phẩm ở đây.</h3>
                <label className='cart-empty__label'>
                    Chúng tôi sẽ giao hàng với hoá đơn trên&nbsp;
                    <span className='cart-empty__min-price'>100,000 đ</span>
                </label>
            </div> */}

            <div className="shopping-carts-page__fill">
                <h3 className='shopping-carts-page__title'>Sản phẩm</h3>
                <ul className="shopping-carts-page__lists">
                    <li className="shopping-carts-page__item">
                        <div className="item-body">
                            <div className="item-body__left">
                                <img src="/assets/img/products/salad/salad-dac-sac.png" alt="Bánh kẹp" />
                                <div className="contents">
                                    <h3 className="contents__title">Bánh Kẹp Nướng</h3>
                                    <div className="contents__size">
                                        <span className="size-child">Kích thước - Nhỏ 6”</span>
                                        <span className="size-child">Đế - Dày</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-body__right">
                                <div className="amount">
                                    <i className="fa-solid fa-minus"></i>
                                    <input type="text" value='1' />
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <span className="prices">149.000đ</span>
                                <button className='btn btn-remove'>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>

                    </li>
                    <li className="shopping-carts-page__item">
                        <div className="item-body">
                            <div className="item-body__left">
                                <img src="/assets/img/products/salad/salad-dac-sac.png" alt="Bánh kẹp" />
                                <div className="contents">
                                    <h3 className="contents__title">Bánh Kẹp Nướng</h3>
                                    <div className="contents__size">
                                        <span className="size-child">Kích thước - Nhỏ 6”</span>
                                        <span className="size-child">Đế - Dày</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-body__right">
                                <div className="amount">
                                    <i className="fa-solid fa-minus"></i>
                                    <input type="text" value='1' />
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <span className="prices">149.000đ</span>
                                <button className='btn btn-remove'>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>

                    </li>
                    <li className="shopping-carts-page__item">
                        <div className="item-body">
                            <div className="item-body__left">
                                <img src="/assets/img/products/salad/salad-dac-sac.png" alt="Bánh kẹp" />
                                <div className="contents">
                                    <h3 className="contents__title">Bánh Kẹp Nướng</h3>
                                    <div className="contents__size">
                                        <span className="size-child">Kích thước - Nhỏ 6”</span>
                                        <span className="size-child">Đế - Dày</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-body__right">
                                <div className="amount">
                                    <i className="fa-solid fa-minus"></i>
                                    <input type="text" value='1' />
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <span className="prices">149.000đ</span>
                                <button className='btn btn-remove'>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>

                    </li>
                    <li className="shopping-carts-page__item">
                        <div className="item-body">
                            <div className="item-body__left">
                                <img src="/assets/img/products/salad/salad-dac-sac.png" alt="Bánh kẹp" />
                                <div className="contents">
                                    <h3 className="contents__title">Bánh Kẹp Nướng</h3>
                                    <div className="contents__size">
                                        <span className="size-child">Kích thước - Nhỏ 6”</span>
                                        <span className="size-child">Đế - Dày</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item-body__right">
                                <div className="amount">
                                    <i className="fa-solid fa-minus"></i>
                                    <input type="text" value='1' />
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <span className="prices">149.000đ</span>
                                <button className='btn btn-remove'>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>

                    </li>
                </ul>
                <div className="shopping-carts-page__bottom">
                    <div className="top">
                        <h3 className='label'>Tổng tiền:&nbsp;</h3>
                        <strong className="total-prices">149.000đ</strong>
                    </div>

                    <div className="bottom">
                        <button className="btn btn-checkout">
                            Thanh toán
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                        <button className="btn btn-backhome">
                            <i className="fa-solid fa-arrow-left"></i>
                            Tiếp tục mua hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage