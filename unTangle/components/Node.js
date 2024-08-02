// this will be the node component to be used throughout the game
import React from 'react';
import  { Pressable, Text, StyleSheet } from 'react-native';

const Node = ({title, onPress, theme}) => {

    return (
        <Pressable>
            circle
        </Pressable>
    );
};

Node.defaultProps = {
    title: 'circle',
    onPress: () => {},
    theme: 'light', // might change prop type as more themes are developed
};

export default Node;