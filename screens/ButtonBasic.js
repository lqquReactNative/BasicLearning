import React, {Component} from 'react';
import {
    Alert, View, Button, StyleSheet,
    TouchableHighlight, Text, TouchableOpacity,
    TouchableNativeFeedback, TouchableWithoutFeedback,
    Platform,
} from 'react-native';

export default class ButtonBasic extends Component {
    _onPressButton() {
        Alert.alert("You tabed the button");
    }

    _onLongPressButton() {
        Alert.alert("You long pressed the button!");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="click Me!"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title=" click me another!"
                        color="#841584"
                    />
                </View>
                <View style={this.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Clicke Me"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Ok!"
                        color="#841584"
                    />
                </View>
                <View>
                    <TouchableHighlight
                        onPress={this._onPressButton}
                        underlayColor="white"
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableHighlight</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity
                        onPress={this._onPressButton}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                TouchableOpacity
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={Platform.OS === 'ios' ? '' : TouchableNativeFeedback.SelectableBackground()}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableNativeFeedbackButton</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableWithoutFeedback
                        onPress={this._onPressButton}
                        onLongPress={this._onLongPressButton}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableHighlight
                        onPress={this._onPressButton}
                        onLongPress={this._onLongPressButton}
                        underlayColor="white"
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableHighLight</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    buttonContainer: {
        margin: 20,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
