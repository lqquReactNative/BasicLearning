import React, {Component} from 'react'
import {View, AppRegistry, StyleSheet} from 'react-native'

export default class FixedDimensionsBasics extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.smallFlex}/>
                <View style={styles.midFlex}/>
                <View style={styles.bigFlex}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    small: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue',
    },
    smallFlex: {
        flex: 1,
        backgroundColor: 'powderblue',
    },
    mid: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
    },
    midFlex: {
        flex: 2,
        backgroundColor: 'skyblue',
    },
    big: {
        width: 150,
        height: 150,
        backgroundColor: 'steelblue',
    },
    bigFlex: {
        flex: 3,
        backgroundColor: 'steelblue',
    },
});

AppRegistry.registerComponent("AwesomeProject", () => FixedDimensionsBasics);
