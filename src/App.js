import { Component } from 'react';
import './App.scss';
import "react-toastify/dist/ReactToastify.css";
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