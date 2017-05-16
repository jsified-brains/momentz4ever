import React from 'react';
import { View, Text } from 'react-native';

const AlbumsScreen = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle} >
            <Text style={textStyle}> Albums screen </Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row' as 'row',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center'
    }
};

export { AlbumsScreen };
