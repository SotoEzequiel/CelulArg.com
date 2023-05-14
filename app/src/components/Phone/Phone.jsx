import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#040614',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'orange',
    margin: 30,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    margin: 21,
  },
  houseImage: {
    width: 300,
    height: 150,
    borderRadius: 4,
  },
  houseName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "white",
    textTransform: 'uppercase'
  },
  housePrice: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  houseDescription: {
    color: '#888',

  },
  houseAndress:{
    color: '#fff'
  }
});

const Phone = (props) => {
  return (
    <View>
      
    </View>
  );
};

export default Phone;
