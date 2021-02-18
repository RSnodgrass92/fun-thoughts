import { Component } from 'react';
import "react-toastify/dist/ReactToastify.css";
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom'

//Components
import Header from "./components/nav.js"
import Footer from "./components/footer.js"
import MainRouter from "./components/mainrouter.js"



class App extends Component {

    render() {
        
        return (
            <Router>
                <Header />
                <MainRouter />
                <Footer />
            </Router>
        );
    }
}

 export default (App);