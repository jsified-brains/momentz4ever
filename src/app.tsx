import React, {Component} from "react";
import {Header, Footer} from "./components/common/index";
import {StyleSheet, Text, View, ViewStyle, TextStyle} from "react-native";


interface Props { }

interface State { }

export default class App extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.appHeader}>
                    <Header headerText="Momentz-4-ever test"></Header>
                </View>
                <View style={styles.appBody}>
                    <Text style={styles.announceHeader}>
                        Hello!!!!!! Welcome to React Native!!!!
                    </Text>
                    <Text style={styles.announceDesc}>
                        Now using Typescript
                    </Text>
                </View>
                <View style={styles.appFooter}>
                    <Footer footerText="About Us" linkAddress="https://www.google.com" ></Footer>
                    <Footer footerText="Contact Us" linkAddress="https://www.yahoo.com"></Footer>
                    <Footer footerText="Site Map" linkAddress="https://www.github.com"></Footer>
                </View>
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
        margin: 10
    } as TextStyle,

    announceDesc: {
        fontSize: 17,
        textAlign: 'center',
        margin: 10
    } as TextStyle,

    announceFooter: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10
    } as TextStyle,

    appHeader: {
        flex: 1,
        flexDirection: 'row' as 'row',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        backgroundColor: '#a3a3c2'
    },

    appBody: {
        flex: 11,
        justifyContent: 'center' as 'center'
    },

    appFooter: {
        flex: 1,
        flexDirection: 'row' as 'row',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        backgroundColor: '#c29869'
    },
});
