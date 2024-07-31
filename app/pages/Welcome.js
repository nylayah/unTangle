// create a welcome screen with a space for app logo, text with app title, and a button to start the app that uses react navigation

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Welcome () {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>unTangle</Text>
            <Button
                title="Start Session"
                onPress={() => navigation.navigate('Levels')}
            />
        </View>
    );
}