import React from 'react';
import { View, Text , Image, ViewStyle, TextStyle} from 'react-native';

const AlbumListItem = (props: CompProps) => {
    const { textStyle , container, imageStyle, imageViewStyle, contentViewStyle} = styles;

    return (
        <View style = {container}>

            <View style = {imageViewStyle} >
                <Image style={imageStyle} source={{uri: props.imageUrl}}/>
            </View>
            <View style = {contentViewStyle}>
                <Text style={textStyle}> { props.name} </Text>
                <Text style={textStyle}> { props.description} </Text>
            </View>

        </View>
    );
};

interface CompProps {
    name: string,
    description: string,
    imageUrl: string
}


const styles = {
    textStyle: {
        fontSize: 15
    } as TextStyle,
    imageViewStyle: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    } as ViewStyle,

    contentViewStyle: {
        flex: 7,
        flexDirection: 'column' as 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start' as 'flex-start'
    } as ViewStyle,

    imageStyle: {
        height: 50,
        width: 50,
        borderWidth: 0.5,
        borderColor: '#435455',
        borderRadius: 50
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        borderColor: '#dad779'
    } as ViewStyle,
    appHeader: {
        flex: 1,
        flexDirection: 'row' as 'row',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        backgroundColor: '#a3a3c2'
    },
    appFooter: {
        flex: 1,
        flexDirection: 'row' as 'row',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        backgroundColor: '#c29869'
    },


}

export { AlbumListItem };

