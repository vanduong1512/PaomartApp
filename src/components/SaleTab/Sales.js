import React, { Component } from 'react';
import {
    StyleSheet, View, Text
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { StackNavigator } from 'react-navigation';

import ListSale from './ListSale';

class Sales extends Component {
    constructor(props) {
        super(props)
        this.state = { date: "2016-05-15" }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text onPress={ () => navigate('SaleDetailTab') }>navigate</Text>
                <View>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                </View>
                <ListSale/>
            </View>
        )
    }
}



export default Sales;