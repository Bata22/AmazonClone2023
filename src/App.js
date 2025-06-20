import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Checkout from './Checkout';

import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51HR2LbBL9dfLtk9gydpx21jyIicAfO4FEQIFqnjLh4lzh0HQURumP9rByfmT6IBJUQp8bIu6Tkeep7ofSg6Wi2Rl00fxJLOx2E');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>>", authUser);
      if (authUser){
        //The user is just loged in  or the user wad logged out
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
      
     
  }, [])
  return (

   <Router> 
    <div className="app">
    
      <Switch>
          <Route path="/login">
                <Login/>
            </Route>
          <Route path="/checkout">
                  <Header/>
                  <Checkout/>
              </Route>
              <Route path="/payment">
                  <Header/>
                  <Elements stripe={promise} >
                       <Payment/>  
                  </Elements>
                  
              </Route>
            


        <Route path="/">
              <Header/>            
              <Home/>
          </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
