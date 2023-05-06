import React, { useState } from "react";
import { View, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Filter = () => {

    const [state, setState] = useState(false)


    function Press() {
        setState(!state)
    }
    return(
        <View style={styles.container}>
            <Icon onPress={Press()} name="sort-amount-asc" size={30} color="#fff" />
            <Modal visible={state} transparent={true} animationType="slide">
            <Text>reara</Text>
            </Modal>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        alignItems: "flex-end",
        textAlign: "right",

    }
  });
export default Filter;