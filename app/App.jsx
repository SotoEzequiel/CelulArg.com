import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Home from "./src/pages/Home/Home";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141624', // aquí puedes cambiar el color de fondo
  },
});

const App = () => {
  return(
    <View style={styles.container}>
    <Home/>
    </View>
  ) 
}




export default App;