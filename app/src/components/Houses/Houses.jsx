import React from 'react';
import { withExpoSnack } from 'nativewind';
import {useTailwind} from 'tailwind-rn';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';




const Houses = () => {

  const tailwind = useTailwind();
    return (
        <Text style={tailwind("text-4xl text-red-600")}>Hola Mundo</Text>
    )
}

export default Houses;