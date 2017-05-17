import React from 'react';
import { View, Text , Image} from 'react-native';

const AlbumListItem = (props: CompProps) => {
    const { textStyle, viewStyle , imageStyle} = styles;

    return (
        <View style={viewStyle} >
            <Image style={imageStyle} source={{uri: props.imageUrl}}/>
            <Text style={textStyle}> { props.name} </Text>
            <Text style={textStyle}> { props.description} </Text>
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
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row' as 'row',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center'
    },
    imageStyle: {
        height: 50,
        width: 50
    }
}

export { AlbumListItem };

