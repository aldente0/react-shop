import React, {useContext} from 'react';
import { ShopContext } from '../context';

export function BasketItem(props) {
    const {
        id,
        name,
        quantity,
        price,
    } = props;

    const {removeFromOrder, decrementItem, incrementItem} = useContext(ShopContext);

    const sumPrice = quantity * price;

    const handleDeleteItemFromBasket = () => {
        removeFromOrder(id);
    };

    const handleDecrementItem = () => {
        decrementItem(id);
    }

    const handleIncrementItem = () => {
        incrementItem(id);
    }

    return (
        <li className="collection-item" id={id}>
            <div className="descrItemOrder">
                {name} <div className="quantity">
                        <span className="change-quantity" onClick={handleIncrementItem}>+</span> {quantity} <span className="change-quantity" onClick={handleDecrementItem}>-</span> = {sumPrice} руб.
                    </div>
            </div>
            <div className="removeItemFromBasket">
                <span className="secondary-content delete-item" onClick={handleDeleteItemFromBasket}><i className="material-icons">close</i></span>
            </div>
        </li>
    )
    
}