import React, {Component} from 'react'
import {AppRegistry, Text} from 'react-native'


export default class BlinkComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {isShowingText: true};
        setInterval(() => {
            this.setState(previousStates => {
                return {isShowingText: !previousStates.isShowingText};
            });
        }, 1000);
    }


    render() {
        let display = this.state.isShowingText ? this.props.text : '';
        return (
            <Text>
                {display}
            </Text>
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => BlinkComponent);
