import React from "react";
import "./App.css";
import BoxTest from "./components/BoxTest";
import Header from "./components/Layout/Header";
import Products from "./components/Shop/Products";
import Footer from "./components/Layout/Footer";
import ModalCart from "./components/Cart/ModalCart";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Products />
      <Footer />
    </React.Fragment>
  );
}

export default App;
