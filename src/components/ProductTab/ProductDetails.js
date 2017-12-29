import React, { Component } from 'react';
import {
    Modal, View, Text, StyleSheet, PanResponder
} from 'react-native';

class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
        };
    };

    componentWillMount(){
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gesture) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
    }

    _onPanResponderGrant(event, gestureState){
        if(event.nativeEvent.pageX === event.nativeEvent.locationX){
            this.setState({
                visible: false,
            });
            this.props.closeModal.onCloseModal();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    visible={this.state.visible}
                    onRequestClose={() => this.setState({ visible: false })}
                >
                    <View style={styles.containerModal} {...this.panResponder.panHandlers}>
                        <View style={styles.modal}>

                        </View>
                    </View>
                </Modal>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    modal: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
    },
});

export default ProductDetails;