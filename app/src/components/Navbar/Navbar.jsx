import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
});

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-menu" size={24} color="black" style={styles.icon} />
      <Ionicons name="ios-pricetag" size={24} color="black" style={styles.icon} />
      <Ionicons name="ios-information-circle" size={24} color="black" style={styles.icon} />
      <Ionicons name="ios-person" size={24} color="black" style={styles.icon} />
      <Ionicons name="ios-search" size={24} color="black" style={styles.icon} />
    </View>
  );
};

export default Navbar;
