import React from "react";
import "./App.css";
import AspectRatioTest from "./components/AspectRatioTest";
import BoxTest from "./components/BoxTest";
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <React.Fragment>
      <AspectRatioTest />
      <BoxTest />
    </React.Fragment>
  );
}

export default App;
