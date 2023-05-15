import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const Phone = (props) => {
  return (
    <View>
      {props.data.map((item, index) => (
        <View key={index} style={styles.container}>
          <Image source={{ uri: item.imagen }} style={styles.image} />
          <Text style={styles.model}>{item.modelo}</Text>
          <Text style={styles.brand}>{item.marca}</Text>
          <Text style={styles.price}>{item.precio}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  brand: {
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
  },
});

export default Phone;
