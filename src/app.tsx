import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ViewStyle,
    TextStyle
} from 'react-native';

// src/index.ts

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.announceHeader}>
                   Hello!!! Welcome to React Native!
                </Text>
                <Text style={styles.announceDesc}>
                   Now using Typescript
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    } as ViewStyle,

    announceHeader: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    } as TextStyle,

    announceDesc: {
        fontSize: 17,
        textAlign: 'center',
        margin: 10,
    } as TextStyle,
});
