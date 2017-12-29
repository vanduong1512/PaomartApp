import {TabNavigator } from 'react-navigation';
import { Alert } from 'react-native';

import ScanTab from '../screens/HomeScreen'
import ProductTab from '../components/ProductTab/Products'
import SaleTab from '../components/SaleTab/Sales'

const TabNavigation = TabNavigator({
    ScanTab: {screen: ScanTab},
    ProductTab: { screen: ProductTab },
    SaleTab: { screen: SaleTab },
    // SaleDetailTab: { screen: SaleDetailTab },
},
{
    tabBarOptions: {
        activeTintColor: '#222',
    }   
});

export default TabNavigation;