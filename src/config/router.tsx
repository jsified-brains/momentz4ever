import { TabNavigator } from 'react-navigation';
import { AlbumsScreen, HomeScreen } from '../screens/index';

const Tabs = TabNavigator({
        HomeScreen: {
            screen: HomeScreen
        },
        AlbumsScreen: {
            screen: AlbumsScreen
        }
    });


export { Tabs };