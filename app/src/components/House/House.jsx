import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const House = (props) => {

    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 50,
          height: 50,
        },
        logo: {
          width: 66,
          height: 58,
        },
      });

    console.log(props);
    return (
        <>
            {
                props.houses.map((i) => {
                    return (
                        <View key={i.id} style={styles.container}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                            <Text>{i.name}</Text>

                        </View>

                    )
                })
            }
        </>
    )
}

export default House;