import './App.css';
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import Footer from './components/Footer';
import About from './components/About';
import Term from './components/Term';
import {BrowserRouter, Switch, Route} from "react-router-dom"

function Main() {
  return (
    <>
    <Header />
    <About />
    <Footer/>
    </>
  );
}

export default Main;
 