import { Component } from 'react';
import './App.scss';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'


//Pages 
import Home from "./pages/home.js"
import Contact from "./pages/contact.js"
import About from "./pages/about.js"
import FAQ from "./pages/faq.js"
import MyAccount from "./pages/myaccount.js"
import PaymentMethods from "./pages/paymentmethods.js"
import ShoppingCart from "./pages/shoppingcart.js"
import BestSellers from "./pages/bestsellers.js"
import Mens from "./pages/mens.js"
import Womens from "./pages/womens.js"
import ForEveryone from "./pages/foreveryone.js"
import Search from "./pages/search.js"
//Components
import Header from "./components/nav.js"
import Footer from "./components/footer.js"




class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/faq" component={FAQ}/>
                <Route path="/about" component={About}/>
                <Route path="/myaccount" component={MyAccount}/>
                <Route path="/paymentmethods" component={PaymentMethods}/>
                <Route path="/shoppingcart" component={ShoppingCart}/>
                <Route path="/bestsellers" component={BestSellers}/>
                <Route path="/mens" component={Mens}/>
                <Route path="/womens" component={Womens}/>
                <Route path="/foreveryone" component={ForEveryone}/>
                <Route path="/search" component={Search}/>
                </Switch>
                <Footer />
            </Router>
        );
    }
}



export default App;
