import './App.css';
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import Footer from './components/Footer';
import About from './components/About';
import Term from './components/Term';
import {BrowserRouter, Switch, Route} from "react-router-dom"

function Main() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <HomeGuest />
      </Route>

      <Route path="/about-us">
        <About />
      </Route>
      <Route path="/terms">
        <Term />
      </Route>
    </Switch>
    <Footer/> 
    </BrowserRouter>
  );
}

export default Main;
 