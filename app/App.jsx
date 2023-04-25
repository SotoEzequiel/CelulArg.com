import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Home from "./components/Home/Home";
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const App = () => {
  return(
    <TailwindProvider utilities={utilities}>
      <Home/>
    </TailwindProvider>
  ) 
}




export default App;