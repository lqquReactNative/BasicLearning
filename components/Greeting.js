import React, {Component} from 'react'
import {AppRegistry, Text} from 'react-native'

export default class Greeting extends Component {

    render() {
        return (
            <Text>
                Hello {this.props.id}+ {this.props.name}!
            </Text>
        );
    };
};

AppRegistry.registerComponent("AwesomeProject", () => Greeting);
