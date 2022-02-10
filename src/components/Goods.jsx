import { useContext } from 'react';
import {Good} from './Good';
import { ShopContext } from '../context';

export function Goods() {

    const {goods = []} = useContext(ShopContext);

    return (

        !goods.length ? (
            <h3>Ups... Nothing here</h3>
        ) : (
        <div className="goods">
            {
            goods.map(good => {
                const {id} = good;
                return <Good key={id} {...good}/>
            })
        }
        </div>
        )
    )
}