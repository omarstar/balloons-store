
import React from "react";
// import Menu from "./components/header/Menu";
import './components/header/header.css'

import { Routes } from "./routes";
import HeaderTop from "./components/header/HeaderTop";
import HeaderBottom from "./components/header/HeaderBottom";
import Footer from "./components/footer/Footer";

class App extends React.Component{
  
  render(){
          
    return (
      
      <div className="grid-container ff-pop">
        <div id="header-wrapper">
          <div id="mobile-navigation"></div>
          <header id="header">
            <HeaderTop />
            <HeaderBottom />
            {/* <Menu /> */}
          </header>
        </div>
        <div style={{margin: "50px 0"}}>
          <Routes isAuthorized={true} />
        </div>
        <footer className="ff-pop footer-wrapper"><Footer /></footer>
      </div>
    );
  }
}

export default App;
