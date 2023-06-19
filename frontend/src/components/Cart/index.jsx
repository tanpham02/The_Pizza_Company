import './cart.scss'
const Cart = () => {

    return (
        // add class have-carts when have carts
        <div
            className='shopping-carts have-carts'>
            <div className="shopping-carts__empty">
                <h3 className='cart-empty__title'>Rất tiếc!!! Bạn không có sản phẩm ở đây.</h3>
                <label className='cart-empty__label'>
                    Chúng tôi sẽ giao hàng với hoá đơn trên&nbsp;
                    <span className='cart-empty__min-price'>100,000 đ</span>
                </label>
            </div>

            <div className="shopping-carts__fill">
                <ul className="shopping-carts__lists">
                    <li className="shopping-carts__item">
                        <img src="/assets/img/products/salad/salad-dac-sac.png" alt="Bánh kẹp" />
                        <div className="item-body">
                            <h3 className="item-body__title">Bánh Kẹp Nướng</h3>
                            <div className="item-body__bottom">
                                <span className="amount">Số lượng: 1</span>
                                <span className="prices">149.000đ</span>
                            </div>
                        </div>
                        <button className='btn btn-remove'>
                            <i className="fa-solid fa-trash-can"></i>
                            <span className='line'></span>
                        </button>
                    </li>
                    <li className="shopping-carts__item">
                        <img src="/assets/img/products/salad/salad-dac-sac.png" alt="Bánh kẹp" />
                        <div className="item-body">
                            <h3 className="item-body__title">Bánh Kẹp Nướng</h3>
                            <div className="item-body__middle">
                                <span>Kích thước - Nhỏ 6”</span>
                                <span>Đế - Dày</span>
                            </div>
                            <div className="item-body__bottom">
                                <span className="amount">Số lượng: 1</span>
                                <span className="prices">149.000đ</span>
                            </div>
                        </div>
                        <button className='btn btn-remove'>
                            <i className="fa-solid fa-trash-can"></i>
                            <span className='line'></span>
                        </button>
                    </li>
                </ul>
                <div className="shopping-carts__bottom">
                    <div className="top">
                        <h3 className='label'>Tổng Tiền</h3>
                        <span className="total-prices">149.000đ</span>
                    </div>

                    <div className="bottom">
                        <button className="btn btn-checkout">Thanh toán</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart