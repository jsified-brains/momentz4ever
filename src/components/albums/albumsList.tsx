import React from 'react';
import { ScrollView } from 'react-native';
import { AlbumListItem} from './index';

const AlbumsList = () => {

    const albums = [{
        "title": "Album 1.",
        "id" : "1",
        "description" : "This is the first album",
        "imageUrl" : "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
        "createdDate" : "05/05/2017",
        "lastViewedOn" : "05/06/2017"
    },
        {
            "title": "Album 2.",
            "id" : "2",
            "description" : "This is the second album",
            "imageUrl" : "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            "createdDate" : "05/07/2017",
            "lastViewedOn" : "05/08/2017"
        }

    ];

    const renderAlbums = () => {
        return albums.map(album =>
            <AlbumListItem key={album.id} name={album.title}  description={album.description} imageUrl={album.imageUrl} ></AlbumListItem>
        );
    }

    return (
        <ScrollView >
                { renderAlbums() }
        </ScrollView>
    );
};




export { AlbumsList };
