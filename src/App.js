import { Component } from 'react';
import './App.scss';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import {connect} from "react-redux"

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
import ItemInfo from "./pages/iteminfo.js"

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
                <Route path="/contact" exact component={Contact}/>
                <Route path="/faq" exact componenet={FAQ}/>
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
                <Redirect to="/"/>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

{/* <Directory campsites={this.state.campsites}/> */}
// const mapStateToProps= (state) => {
//     return {
//      currentItem
//     }
// }
// connect(mapStateToProps)
 export default (App);