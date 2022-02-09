import {Good} from './Good';

export function Goods(props) {
    const {goods = []} = props;

    

    return (

        !goods.length ? (
            <h3>Ups... Nothing here</h3>
        ) : (
        <div className="goods">
            {
            goods.map(good => {
                const {
                    id
                } = good;
                return <Good key={id} {...good} addToOrder={props.addToOrder}/>
            })
        }
        </div>
        )
    )
}