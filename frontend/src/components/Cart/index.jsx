import './cart.scss'

const Cart = () => {
    return (
        <div className="shopping-carts" >
            <div className="shopping-carts__empty">
                <h3 className='cart-empty__title'>Rất tiếc!!! Bạn không có sản phẩm ở đây.</h3>
                <label className='cart-empty__label'>
                    Chúng tôi sẽ giao hàng với hoá đơn trên&nbsp;
                    <span className='cart-empty__min-price'>100,000 đ</span>
                </label>
            </div>
        </div>
    )
}

export default Cart