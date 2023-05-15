import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/pages/Home/HomePage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsPage from "./src/pages/Details/DetailsPage"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141624', // aquí puedes cambiar el color de fondo
  },
});

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Details" component={DetailsPage} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}


