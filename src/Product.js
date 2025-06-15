import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id,title, image, price, raiting}) {
    const [{basket}, dispatch ] =useStateValue();
   
    const addToBasket = () => {

            //Dispatch the item into the data layer
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id:id,
                    title: title,
                    image: image,
                    price: price,
                    raiting: raiting
                },
            });
    };

    return (
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__raiting">
                {Array(raiting)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
               
               
            </div>
        </div>
        <img src={image} alt="Product"/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
    )
}

export default Product;
