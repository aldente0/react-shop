import { BasketItem } from "./BasketItem";

export function Basket(props) {
    const {
        order = [],
        isBasketShow,
        handleBasketShow,
        deleteItemFromBasket,
        incrementItem,
        decrementItem,
        checkout
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum = sum + el.price * el.quantity;
    }, 0)

    return isBasketShow ? (
        <div className="collection basket-list">
            <li className="collection-item active">Корзина <a href="#!" className="secondary-content" onClick={handleBasketShow}><i className="material-icons">close</i></a></li>
            {
                order.length ? (
                    order.map(el => <BasketItem key={el.id} {...el} incrementItem={incrementItem} decrementItem={decrementItem} deleteItemFromBasket={deleteItemFromBasket}/>)
                ) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">Общая стоимость: {totalPrice} руб. <span className="secondary-content checkout" onClick={() => checkout()}>Оформить заказ</span></li>
        </div>
    ) : (<></>)
    
}