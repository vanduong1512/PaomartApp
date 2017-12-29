import React, { Component } from 'react';
import {
    SectionList, View, ListItem, Text
} from 'react-native';

class ListSale extends Component{
    render(){
        var dataSource = [{ data: ['nguyen', 'van', 'duong'], title: 'ten' }, { data: ['1512'],  title: 'nam sinh' }];
        return(
            <View>
                <SectionList 
                    renderItem={({item}) => <Text>{item.key}</Text>}
                    renderSectionHeader={({section}) => <Text>{section.key}</Text>}
                    sections={ [{ data: [{ key: "nguyen" }, { key: "van" }, { key: "duong" }], key: "ten" }, { data: [{ key: "1512" }],  key: "nam sinh" }] }
                />
            </View>
        );
    };
}

export default ListSale;