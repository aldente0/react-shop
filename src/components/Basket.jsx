import { useContext } from "react";
import { ShopContext } from "../context";
import { BasketItem } from "./BasketItem";

export function Basket() {

    const {order, isBasketShow, handleBasketShow} = useContext(ShopContext);



    const totalPrice = order.reduce((sum, el) => {
        return sum = sum + el.price * el.quantity;
    }, 0)

    return isBasketShow ? (
        <div className="collection basket-list">
            <li className="collection-item active">Корзина <a href="#!" className="secondary-content" onClick={handleBasketShow}><i className="material-icons">close</i></a></li>
            {
                order.length ? (
                    order.map(el => <BasketItem key={el.id} {...el}/>)
                ) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">Общая стоимость: {totalPrice} руб. <span className="secondary-content checkout">Оформить заказ</span></li>
        </div>
    ) : (<></>)
    
}