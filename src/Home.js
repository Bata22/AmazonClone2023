import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
                <div className="home__container">
                        <img className="home__image" 
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon prime baner"/>

                        <div className="home__row">
                            <Product
                            id="4903850"
                             title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                             price={29.99} 
                             image="https://m.media-amazon.com/images/I/510AO7UjVPL._AC_UY218_.jpg"
                             raiting={5}/>
                             
                            <Product
                            id="2303123"
                             title="YAKEDA Tactical Vest Outdoor Ultra-Light Breathable Combat Training Vest Adjustable for Adults 600D Encryption"
                             price={39.99} 
                             image="https://m.media-amazon.com/images/I/61Em6kwTCrL._SR230,210_.jpg"
                             raiting={5}/>
                           
                            
                        </div>
                        <div className="home__row">
                        <Product 
                        id="4233850" 
                        title="Ibanez AEWC11-TCB Electro Acoustic Guitar - Transparent Charcoal Burst"
                             price={349.99} 
                             image="https://m.media-amazon.com/images/I/51CUzvs4VBL._AC_UL320_.jpg"
                             raiting={4}/>
                        <Product
                            id="1903850"
                            title="Ibanez PC12MHE-OPN Open Pore Natural"
                             price={149.99} 
                             image="https://m.media-amazon.com/images/I/71fXa4K8oeL._AC_UL320_.jpg"
                             raiting={5}/>
                        <Product
                        id="4475850" 
                            title="Ibanez AEG7MH Open Pore Natural"
                             price={216.99} 
                             image="https://m.media-amazon.com/images/I/81QwrYGG9gL._AC_UL320_.jpg"
                             raiting={2}/>

                           
                        </div>
                        <div className="home__row">
                        <Product 
                        id="4903950" title="AMD RyzenTM 9 3900XT Processor (12 Cores/24 Threads, 70 MB Cache, up to 4.7 GHz Max Boost)"
                             price={189.99} 
                             image="https://m.media-amazon.com/images/I/7122uH4-hfL._AC_UY218_.jpg"
                             raiting={5}/>
                        <Product id="4902460" title="Gigabyte Aorus GeForce Rtx 2070"
                             price={489.00} 
                             image="https://m.media-amazon.com/images/I/61A0XfAXThL._AC_UY218_.jpg"
                             raiting={5}/>
                            
                           
                          
                        </div>


                </div>
        </div>
    )
}

export default Home;

