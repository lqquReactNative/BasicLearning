import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

export default class MyFlatList extends Component {

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={[
                    {text: 'Devin'},
                    {text: 'Jackson'},
                    {text: 'James'},
                    {text: 'Joel'},
                    {text: 'John'},
                    {text: 'Jillian'},
                    {text: 'Jimmy'},
                    {text: 'Julie'},
                    {text: '1'},
                    {text: '2'},
                    {text: '4'},
                    {text: '3'},
                    {text: '6'},
                    {text: '5'},
                    {text: '7'},
                    {text: '8'},
                    {text: '9'},
                    {text: '10'},
                    {text: '11'},
                    {text: '12'},
                    {text: '13'},
                    {text: '14'},
                    {text: '15'},
                    {text: '16'},
                    {text: '17'},
                    {text: '18'},
                    {text: '19'},
                    {text: '20'},
                    {text: '21'},
                    {text: '23'},
                    {text: '24'},
                    {text: '25'},
                ]}
                          renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}>

                </FlatList>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
