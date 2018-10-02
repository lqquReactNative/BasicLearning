import React,{Component} from 'react'
import {AppRegistry,View,Text,StyleSheet} from 'react-native'

export default  class LotsOfStyles extends Component{

    render (){
        return(
            <View>
                <Text style={styles.red}>RED</Text>
                <Text style={styles.bigBlue}>BIG BLUE</Text>
                <Text style={[styles.bigBlue,styles.red]}>BIG BLUE THEN RED</Text>
                <Text style={[styles.red,styles.bigBlue]}>RED THEN BIG BLUE</Text>
            </View>
        );
    }

}
const  styles = StyleSheet.create({
   bigBlue: {
       color: 'blue',
       fontWeight: 'bold',
       fontSize: 30,
   },
    red:{
       color: 'red',
    }
});

AppRegistry.registerComponent("AwesomeProject",()=>LotsOfStyles);
