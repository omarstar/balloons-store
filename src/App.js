
import React, { useEffect, useState } from "react";
// import Menu from "./components/header/Menu";
import './components/header/header.css'
import "react-toastify/dist/ReactToastify.css"

// import { Routes } from "./routes";
import store from "./store";
import HeaderTop from "./components/header/HeaderTop";
// import HeaderBottom from "./components/header/HeaderBottom";
import Footer from "./components/footer/Footer";

import { ToastContainer } from 'react-toastify'
import { cartActions } from "./store/cart/cart-slice";
import { RoutesElement } from "./routes";

import { useSelector } from "react-redux";
import MobileMenu from "./components/header/MobileMenu";


function App() {

  store.dispatch(cartActions.getTotals());

  const isShowMenu = useSelector(state => state.cart.showMobileMenu)
  console.log('isShowMenu in app', isShowMenu);
  

    return (
      <div className="grid-container ff-pop">
        <div id="header-wrapper" className={isShowMenu? 'mobile-navigation-is-open' : ''}>
          
          {/* mobile menu slider */}
          <div id="mobile-navigation" className={isShowMenu ? "visible" : ""}><MobileMenu /></div>
          {/* <header id="header"> */}
            <HeaderTop />
            
            {/* <Menu /> */}
          {/* </header> */}
        </div>
        <div style={{margin: "15px 0"}}>
          {/* <Routes isAuthorized={true} /> */}
          <RoutesElement />
        </div>
        <ToastContainer />
        <footer className="ff-pop footer-wrapper"><Footer /></footer>
      </div>
    );

}

export default App;
