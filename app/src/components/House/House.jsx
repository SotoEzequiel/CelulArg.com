import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'none',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'orange',
    margin: 10,
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
    borderRadius: 5,
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
});

const HouseList = (props) => {
  return (
    <View>
      {props.houses.map((i) => {
        return (
          <View style={styles.cardContainer} key={i.id}>
            <View style={styles.imageContainer}>
              <Image style={styles.houseImage} source={{ uri: i.image }} />
            </View>
            <View>
              <Text style={styles.houseName}>{i.name}</Text>
              <Text style={styles.housePrice}>${i.price}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default HouseList;
