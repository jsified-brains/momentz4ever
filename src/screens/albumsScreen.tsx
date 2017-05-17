import React from 'react';
import { View, Text, Button } from 'react-native';

const AlbumsScreen = (props:any) => {
    const { textStyle, viewStyle } = styles;
    const { navigate } = props.navigation;

    return (
        <View style={viewStyle} >
            <Text style={textStyle}> Albums screen </Text>
            <Button
                onPress={() => navigate('HomeScreen')}
                title="Go to home Screen"
            />
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
