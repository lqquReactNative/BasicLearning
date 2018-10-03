import React, {Component} from 'react'
import {AppRegistry, View, StyleSheet} from 'react-native'

export default class LayoutWithFlexBox extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection:'row',justifyContent: 'center',alignItems: 'stretch',}}>
                <View style={[styles.small, {backgroundColor: 'skyblue',}]}/>
                <View style={{width: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 100, backgroundColor: 'steelblue'}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    small: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue',
    }
});

AppRegistry.registerComponent("AwesomeProject", () => LayoutWithFlexBox);
