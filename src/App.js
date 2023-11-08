
import React from "react";
import Menu from "./components/header/Menu";
import Footer from "./components/footer/Footer";
import { Routes } from "./routes";

class App extends React.Component{
  
  render(){
          
    return (
      
      <div className="grid-container ff-pop">
        <header><Menu /></header>
          <Routes isAuthorized={true} />
        <footer className="ff-pop footer-wrapper"><Footer /></footer>
      </div>
    );
  }
}

export default App;
