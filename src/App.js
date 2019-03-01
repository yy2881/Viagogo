import React, { Component } from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';


import Header from './components/header_footer/Header'
import Featured from './components/featured/index';
import TimeUntil from './components/featured/TimeUntil';
import Info from './components/info/index';
import Highlights from './components/highlight/index';
import Pricing from './components/pricing/index';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px",background:"white"}}>
        <Header/>
        <Element name='featured'>
          <Featured/>
        </Element>
        <Element name='info'>
          <Info/>
        </Element>
        
        <Element name='highlight'>
          <Highlights/>
        </Element>
       
       <Element name='pricing'>
        <Pricing/>
       </Element>
        
        <Element name='location'>
        <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
