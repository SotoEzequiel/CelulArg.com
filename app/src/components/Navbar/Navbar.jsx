import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="ios-menu" size={30} color="#444" />
        </TouchableOpacity>
        <Text style={styles.title}>RentHouse</Text>
        <Ionicons name="ios-person" size={30} color="#444" />
      </View>
      <Modal visible={isMenuOpen} transparent={true} animationType="slide">
        <TouchableOpacity style={styles.modalOverlay} onPress={closeMenu} />
        <View style={styles.menu}>
          <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
            <Ionicons
              name={isMenuOpen ? 'ios-arrow-down' : 'ios-arrow-up'}
              size={50}
              color="#444"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Dev</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
export default Navbar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: 'orange',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    color: '#000'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'orange',
    width: '100%',
    height: '100%',
  },
  closeButton: {
    padding: 20,
    alignSelf: 'flex-end',
    
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.)'
    },
  menuItem:{
    textAlign: "center",
    
    },
    menuText: {
      fontSize: 20,
      fontWeight:'800',
      color: '#222',
      textTransform: 'uppercase',
      padding: 16,
      marginHorizontal: 60,
      marginVertical: 15,
      borderWidth: 1,
      borderColor: '#333',
      backgroundColor: '#f28e00' 
    }
  
  })