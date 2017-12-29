import React, { Component } from 'react';
import {
    TextInput, Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import { StackNavigator, } from 'react-navigation';

export default class AddForm extends Component {
    static navigationOptions = {
        title: 'AddForm',
    };

    constructor(props){
        super(props);
        this.state = {
            inputBarcode: '',
        };
    };

    render() {
        const { navigate } = this.props;
        return (
            <View style={{ alignSelf: 'stretch' }}>
                <TextInput
                    style={styles.textInput}
                    value={this.state.inputBarcode}
                    keyboardType='numeric'
                    onChangeText={ (barcode) => this.setState({ inputBarcode: barcode }) }
                />
                <View style={styles.containerBtn}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={ navigate }
                    >
                        <Text style={{ fontSize: 20 }}>Scan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 20 }}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    containerBtn: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
    },
    button: {
        //backgroundColor: '#85C1E9',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    textInput: {
        height: 40,
        backgroundColor: '#E4F6D4',
        margin: 30,
        paddingHorizontal: 10
    },
});