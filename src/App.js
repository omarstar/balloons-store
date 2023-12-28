
import React from "react";
// import Menu from "./components/header/Menu";
import './components/header/header.css'
import "react-toastify/dist/ReactToastify.css"

import { Routes } from "./routes";
import HeaderTop from "./components/header/HeaderTop";
import HeaderBottom from "./components/header/HeaderBottom";
import Footer from "./components/footer/Footer";

import { ToastContainer } from 'react-toastify'

import { useSelector } from "react-redux";
import store from "./store";
import { cartActions } from "./store/cart/cart-slice";

function App() {

          
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log('isLoggedIn', isLoggedIn)

  store.dispatch(cartActions.getTotals());

  // const carti = useSelector(state=> state.cart.cartItems);
  // console.log('first', carti)

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
          <Routes isAuthorized={true} />
        </div>
        <ToastContainer />
        <footer className="ff-pop footer-wrapper"><Footer /></footer>
      </div>
    );

}

export default App;
