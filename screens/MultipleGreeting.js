import React, {Component} from 'react'
import {AppRegistry, View} from 'react-native'
import Greeting from '../components/Greeting'

export default class MultipleGreeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name={'zhangsan'} id={1}/>
                <Greeting name='lisi' id={2}/>
                <Greeting name='wangwu' id={3}/>
            </View>
        );
    }
};

AppRegistry.registerComponent("AwosomeProject", () => MultipleGreeting);
