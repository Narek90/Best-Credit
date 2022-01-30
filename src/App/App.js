import React from 'react'
import './App.css';
import {
  Switch,
  Route, 
} from 'react-router-dom'
import Header from './view/Header/Header';
import About from './view/About/About';
import ContactUs from './view/ContactUs/ContactUs';
import Loans from './view/Loans/Loans';



function App() {

  return (
    <div className="App">
       <Header />
      <Switch>
        <Route exact path='/'>
         welcome to Best Credit LLC website
        </Route>
        <Route path="/about" component={About}/> 
        <Route path="/contact" component={ContactUs}/> 
        <Route path="/loans" component={Loans}/> 
    
      </Switch>

    </div>
  );
}

export default App;
