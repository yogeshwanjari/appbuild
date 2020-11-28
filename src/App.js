
import React, { Component } from "react";
import "./App.css";
import Navbar from  "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
    </div>
  );
}

export default App;