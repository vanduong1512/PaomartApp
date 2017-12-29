import React, { Component } from 'react';
import {
    View, Text,
} from 'react-native';

class SaleDetail extends Component {
    static navigationOptions ={
        tabBarVisible: false,
    }

    render(){
        return(
            <Text>This is Sale detail</Text>
        );
    };
}

export default SaleDetail;