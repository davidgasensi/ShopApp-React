import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from './resources/theme/index';
import {Provider} from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </Provider>
);
