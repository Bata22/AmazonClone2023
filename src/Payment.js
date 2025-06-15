import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import {CardElement ,useStripe, useElements } from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';


function Payment(id, title, price, image ,raiting) {

    const [{user, basket}] = useStateValue();
    const history= useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled]= useState(true);
    const [clientSecret, setClientSecret]= useState(true);  
    
    useEffect (()=>{
        const getClientSecret = async ()=>{
                const resposnse = await axios({ 
                    matod: 'post',
                    url: `payments/create?total=${getBasketTotal(basket)*100}`
                });
                setClientSecret(resposnse.data.clientSecret);

        }
         getClientSecret();
    }, [basket]);

    console.log("THE SECRET ISS", clientSecret)


    const handleSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, 
           { paymen_metod:{
            card: elements.getElement(CardElement)
        } 
        
      }).then (({paymentIntent}) => {
          //paymentInern= payment confirmation

          setSucceded(true);
          setError(null);
          setProcessing(false);

          history.replaceState('/orders')


      })
    }
    const handleChange = event =>{

        setDisabled(event.empty);
        setError(event.error ? event.error.message: "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                    <h1>
    Checkout( 
    {<Link to="checkout">{basket?.length} items </Link>})
                    </h1>
                {/* payment section delivery addres */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address </h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Bata reactr</p>
                        <p>Srbija , Vranje</p>
                    </div>
                </div>
                <div className="payment__section">
                <div className="payment__title">
                        <h3>Review items and deliivery</h3>
                    </div>
                    <div className="payment__items">
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
                <div className="payment__section">
                <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                            <CurrencyFormat
                                        renderText={(value)=>(  
                                            <>
                                                <h3>Order Total: {value}</h3>

                                            </>
                                        )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    /> 
                                    <button disabled={processing || disabled || succeeded }  >
                                        <span>{processing ?<p> Processing</p> : "Buy Now"}</span>
                                    </button>
                            </div>
                                        {error && <div>{error}</div>}

                        </form>

                    </div>
                </div>
              
            </div>
            
        </div>
    )
}

export default Payment;
