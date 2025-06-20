import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket, user }, dispatch ] =useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Ad" />
                <div className="checkout__title">
                    <h3>Hello, {user?.email}</h3>
                        <h2>Your shoping basket</h2>
                        {basket.map(item =>(
                                <CheckoutProduct
                                    id={item.id}
                                title={item.title}
                                price={item.price} 
                                image={item.image}
                                raiting={item.raiting}


                                
                                />
                        ))}
                    


                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
                 
            </div>
        </div>
    )
}

export default Checkout;
/* 1:05:43 */