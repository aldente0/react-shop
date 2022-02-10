import React, {useEffect, useContext} from 'react';
import {API_KEY, API_URL} from '../config';

import { ShopContext } from '../context';

import {Goods} from './Goods';
import {Preloader} from './Preloader'
import { Cart } from './Cart';
import { Basket } from './Basket';
import { Alert } from './Alert';



export function Main() {
    const {setGoods, loading, order, isBasketShow, alertName} = useContext(ShopContext);

    //get goods
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        }).then(response => response.json())
        .then(data => {
            data.featured && setGoods(data.featured)
        })
        //eslint-disable-next-line
    }, [])

    return (
        <div className='container content'>
            <Cart quantity={order.length} ></Cart>
            {
                loading ? ( 
                    <Preloader/>
                ) : (
                    <Goods />
                )
            }
            {
                isBasketShow && <Basket />
            }
            {alertName && <Alert />}
        </div>
    )
}