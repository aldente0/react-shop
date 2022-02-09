export function Good(props) {
    const {
        id,
        name, 
        description,
        price,
        full_background,
        addToOrder
    } = props;

    const handleAddToBasket = () => {
        addToOrder({
            id,
            name,
            price
        })
    }

    return (
        <div className="card" id={id}>
        <div className="card-image">
          <img src={full_background} alt={name}/>
        </div>
        <div className="card-content">
        <span className="card-title">{name}</span>
          <p className="description">{description}</p>
        </div>
        <div className="card-action priceAndSale">
            <button className="waves-effect waves-light btn sale" onClick={handleAddToBasket}>КУПИТЬ</button>
            <span>Стоимость: {price}</span>
        </div>
      </div>
    )
}