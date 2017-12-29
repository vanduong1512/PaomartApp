import React, { Component } from 'react';
import {
    View, Text, TextInput, FlatList, Alert, Modal
} from 'react-native';

import ModalDemo from './ProductDetails';

class Products extends Component {
    constructor(props){
        super(props);

        this.state = {
            isVisibleModal: false,
            filterProduct: '',
        };

        this.onCloseModal = this._onCloseModal.bind(this);
        this.onOpenModal = this._onOpenModal.bind(this);
    }

    _onCloseModal(){
        this.setState({
            isVisibleModal: false,
        });
    }

    _onOpenModal(){
        this.setState({
            isVisibleModal: true
        });
    }

    render() {
        var dataSource = [{ key: 'nguyen' }, { key: 'van' }, { key: 'duong' }, { key: '1512' }];
        return (
            <View>
                {
                    this.state.isVisibleModal &&
                    <ModalDemo closeModal={{onCloseModal: this.onCloseModal}}/>
                }
                <Text>This is product Tab</Text>
                <TextInput
                    placeholder='search items'
                    onChangeText={ (text) => {
                        this.setState({
                            filterProduct: text,
                        })}
                     }
                    value={ this.state.filterProduct }
                >
                </TextInput>
                <FlatList
                    data={dataSource}
                    renderItem={({ item }) => <Text onPress={ this.onOpenModal }>{item.key}</Text>}
                />
            </View>
        );
    };
}

export default Products;