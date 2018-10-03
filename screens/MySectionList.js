import React, {Component} from 'react';
import {View, SectionList, Text, StyleSheet} from 'react-native';

export default class MySectionList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Davin', 'Dannel']},
                        {title: 'A', data: ['Align', 'Abby', 'Amy']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    // pls notice the section variable names
                    // if not correctly will ge a error.
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
