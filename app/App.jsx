import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Houses from "./src/components/Houses/Houses";
import Navbar from "./src/components/Navbar/Navbar";
import Footer from "./src/components/Footer/Footer"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141624', // aquí puedes cambiar el color de fondo
  },
});

const App = () => {
  return(
    <View style={styles.container}>
    <Navbar/>
      <Houses/>
      <Footer/>
    </View>
  ) 
}




export default App;