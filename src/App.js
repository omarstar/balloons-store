
import React from "react";
// import Menu from "./components/header/Menu";
import './components/header/header.css'
import "react-toastify/dist/ReactToastify.css"

// import { Routes } from "./routes";
import store from "./store";
import HeaderTop from "./components/header/HeaderTop";
import HeaderBottom from "./components/header/HeaderBottom";
import Footer from "./components/footer/Footer";

import { ToastContainer } from 'react-toastify'
import { cartActions } from "./store/cart/cart-slice";
import { RoutesElement } from "./routes";

function App() {

  store.dispatch(cartActions.getTotals());

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
          {/* <Routes isAuthorized={true} /> */}
          <RoutesElement />
        </div>
        <ToastContainer />
        <footer className="ff-pop footer-wrapper"><Footer /></footer>
      </div>
    );

}

export default App;
