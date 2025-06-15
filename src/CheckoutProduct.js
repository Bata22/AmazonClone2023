import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';



function CheckoutProduct({id,title, image, price, raiting}) {
    const [{basket}, dispatch ] =useStateValue();
    const removeFromBasket= () => {
        // remove item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })

        
    }

    
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">

                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__raiting">
                    {Array(raiting)
                    .fill()
                    .map((_, i) =>
                     ( <span key={i} role="img" aria-label="star"> ⭐️ </span> 
                    ))}
               


                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>



            </div>
            
            
        </div>
    )
}

export default CheckoutProduct;
