import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="logo-facebook" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <FontAwesome5 name="twitter" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Entypo name="instagram" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  icon: {
    marginHorizontal: 15,
  },
});

export default Footer;
