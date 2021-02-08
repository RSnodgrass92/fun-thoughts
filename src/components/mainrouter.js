//pages
import Home from "../pages/home.js";
import Contact from "../pages/contact.js";
import About from "../pages/about.js";
import Faq from "../pages/faq.js";
import MyAccount from "../pages/myaccount.js";
import PaymentMethods from "../pages/paymentmethods.js";
import ShoppingCart from "../pages/shoppingcart.js";
import BestSellers from "../pages/bestsellers.js";
import Mens from "../pages/mens.js";
import Womens from "../pages/womens.js";
import ForEveryone from "../pages/foreveryone.js";
import Search from "../pages/search.js";
import ItemInfo from "../pages/iteminfo.js";
import SignUp from "../pages/signup.js"

import {Route, Switch, Redirect} from 'react-router-dom'; 
import React from 'react'; 

function  MainRouter(props)
{
    return(     
                <React.Fragment>
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/faq" exact component={Faq}/>
                <Route path="/about"  exact component={About}/>
                <Route path="/myaccount" exact component={MyAccount}/>
                <Route path="/paymentmethods" exact component={PaymentMethods}/>
                <Route path="/shoppingcart" exact component={ShoppingCart}/>
                <Route path="/bestsellers" exact component={BestSellers}/>
                <Route path="/mens" exact component={Mens}/>
                <Route path="/womens"  exact component={Womens}/>
                <Route path="/foreveryone" exact component={ForEveryone}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/iteminfo/:id" exact render={props=><ItemInfo {...props}/>}/>
                <Route path="/signup" exact component={SignUp}/>
                <Redirect to="/"/>
                </Switch>
                </React.Fragment>
     );
}             
                
export default MainRouter