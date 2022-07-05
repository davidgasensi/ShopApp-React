import "./App.css";
import Header from "./components/Layout/Header";
import Products from "./components/Shop/Products";
import Footer from "./components/Layout/Footer";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      <Header />
      <Products />
      <Footer />
    </React.Fragment>
  );
}

export default App;
