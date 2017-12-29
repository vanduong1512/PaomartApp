import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity,
    Alert,
    ToastAndroid,
    Back
} from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, } from 'react-navigation';

import ContentProduct from '../components/HomeTab/ContentScanProducts';
import AddForm from '../components/HomeTab/AddForm';

import store from '../redux/store';

import Response from '../API/demo';

class PaomartApp extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
        this.state = {
            isAdding: false,
            demo: [],
        };

        this.getDataFromChild = this._getDataFromChild.bind(this);
        this.navigateScannerScreen = this._navigateScannerScreen.bind(this);
        this.onAddForm = this._onAddForm.bind(this);
    };

    componentWillMount() {
        Response.getResult().then((res) =>
            this.setState({ demo: res }))
            .catch((error) => {
                console.error(error);
                alert(error.message);
            });

    }

    _getDataFromChild(barcode) {
        var addAmount = 1;
        var isEdit = false;
        if (this.props.arrProducts.length > 0) {
            this.props.arrProducts.map(e => {
                if (e.barcode === barcode) {
                    store.dispatch({
                        type: 'EDIT_AMOUNT',
                        barcode,
                        addAmount,
                    });
                    isEdit = true;
                    return;
                }
            });
            //add to list
            if (!isEdit) {
                store.dispatch({ type: 'ADD_PRODUCT', barcode });
            }
        }
        else store.dispatch({ type: 'ADD_PRODUCT', barcode });
    }

    _navigateScannerScreen() {
        this.props.navigation.navigate('ScannerScreen', { getDataFromChild: this.getDataFromChild });
        this.onAddForm;
    }

    _onAddForm() {
        this.setState((prevState, props) => ({
            isAdding: !prevState.isAdding,
        }));
    }

    render() {
        const { navigate } = this.props.navigation;
        alert(this.state.demo.toString());
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 30 }}>List Products</Text>
                    <TouchableOpacity onPress={this.onAddForm}>
                        <Text style={{ fontSize: 30, }}>+</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isAdding === true &&
                    <AddForm navigate={this.navigateScannerScreen} />
                }
                {
                    this.props.arrProducts.length > 0 &&
                    <ContentProduct />
                }
                <TouchableOpacity style={styles.btnSell} onPress={() => this.props.arrProducts / length}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Sell</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BBBBBB',
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
    },
    btnSell: {
        padding: 10,
        justifyContent: 'center',
        width: 150,
        backgroundColor: '#6666FF',
        margin: 10,
        alignItems: 'center',
    },
});

function mapStateToProps(state) {
    return { arrProducts: state.arrProducts };
}

export default connect(mapStateToProps)(PaomartApp);
