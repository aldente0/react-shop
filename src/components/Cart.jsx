export function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;

    return <div className="cart #66bb6a green lighten-1" onClick={handleBasketShow}>
        <i className="material-icons">shopping_cart</i>
        {
            quantity ? (<span className='cart-quantity'>{quantity}</span>) : (null)
        }
    </div>
}