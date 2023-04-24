import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)


const Home = () => {
    return (
        <StyledView className="flex-1 items-center justify-center">
        <StyledText className="text-4xl text-red-600">Hola Mundo</StyledText>
      </StyledView>
    )
}

export default Home;