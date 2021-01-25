import { Component } from 'react';
import './App.scss';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'


//Pages 
import Home from "./pages/home.js"
import Contact from "./pages/contact.js"
import About from "./pages/about.js"
import FAQ from "./pages/faq.js"
import MyAccount from "./pages/myaccount.js"
import PaymentMethods from "./pages/paymentmethods.js"
import ShoppingCart from "./pages/shoppingcart.js"
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
                </Switch>
                <Footer />
            </Router>
        );
    }
}



export default App;
