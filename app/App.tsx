import React from "react";
import {StyleSheet, Text, View} from "react-native";

const App = () => {
  return(
    <View style={styles.container}>
  <Text style={styles.texto}>
    hola
  </Text>
    </View>
  ) 
}


const styles = StyleSheet.create({
  container: {flex: 1 , justifyContent: "center", alignItems: "center"},
  texto: {color: "#109910", fontSize: 60}
})

export default App;