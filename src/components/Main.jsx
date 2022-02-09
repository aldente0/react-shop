import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL} from '../config'

import {Goods} from './Goods';
import {Preloader} from './Preloader'
import { Cart } from './Cart';
import { Basket } from './Basket';
import { Alert } from './Alert';



export function Main() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const deleteItemFromBasket = (id) => {
        setOrder(order.filter(el => el.id !== id));
    }

    const checkout = () => {
        setOrder([]);
    }

    const incrementItem = (id) => {

        const newOrder = order.map(el => {
            if (el.id === id) {
                const newEl = {
                    ...el,
                    quantity: el.quantity + 1
                }
                return newEl
            } else {
                return el;
            }
        });

        setOrder(newOrder);
    }

    const decrementItem = (id) => {
        
        const newOrder = order.map(el => {
            if (el.id === id) {

                const newQuantity = el.quantity - 1;

                const newEl = {
                    ...el,
                    quantity: newQuantity > 0 ? newQuantity : 0
                }

                return newEl;
                
            } else {
                return el;
            }
        })

        setOrder(newOrder)
        
    }

    const closeAlert = () => {
        setAlertName('');
    }

    const addToOrder = (item) => {
        const itemIndex = order.findIndex(el => el.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
    
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        }

        setAlertName(item.name);
    }

    //get goods
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': '225419eb-022541d6-4ac4d86b-e33371b4',
            }
        }).then(response => response.json())
        .then(data => {
            data.featured && setGoods(data.featured)
            setLoading(false);
        })
    }, [])

    return (
        <div className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}></Cart>
            {
                loading ? ( 
                    <Preloader/>
                ) : (
                    <Goods goods={goods} order={order} addToOrder={addToOrder}/>
                )
            }
            {
                isBasketShow && <Basket order={order} incrementItem={incrementItem} decrementItem={decrementItem} isBasketShow={isBasketShow} handleBasketShow={handleBasketShow} deleteItemFromBasket={deleteItemFromBasket} checkout={checkout}/>
            }
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </div>
    )
}