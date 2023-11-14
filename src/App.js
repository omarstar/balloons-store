
import React from "react";
// import Menu from "./components/header/Menu";
import './components/header/header.css'

import { Routes } from "./routes";
import HeaderTop from "./components/header/HeaderTop";
import HeaderBottom from "./components/header/HeaderBottom";
import Footer from "./components/footer/Footer";

import { useSelector } from "react-redux";

function App() {

          
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log('isLoggedIn', isLoggedIn)

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
        <div style={{margin: "15px 0"}}>
          <Routes isAuthorized={isLoggedIn} />
        </div>
        <footer className="ff-pop footer-wrapper"><Footer /></footer>
      </div>
    );

}

export default App;
