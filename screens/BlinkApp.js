import React, {Component} from 'react'
import {AppRegistry, View} from 'react-native'
import BlinkComponent from '../components/BlinkComponent'


export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <BlinkComponent text={'one star'}/>
                <BlinkComponent text={'two star'}/>
                <BlinkComponent text={'three star'}/>
            </View>
        )
    }

}

AppRegistry.registerComponent("AwesomeProject", () => BlinkApp);
