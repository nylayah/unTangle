// this will be the node component to be used throughout the game
import React, { useEffect, useState, useRef, useRefCallback } from 'react';
import { View, PanResponder, Animated, Pressable } from 'react-native';

const Node = ({position, onPanResponderGrant, onPanResponderMove}) => {

    return (
        <Pressable
            onLongPress={onPanResponderGrant}
            onLongPressMoved={onPanResponderMove}
        >
            <View style = {[styles.node, {left: position.x, top: position.y}]} />
        </Pressable>
    );
};

const Line = ({ start, end }) => {
    const lineRef = useRef(new Animated.ValueXY()).current;

    useEffect(() => {
        Animated.timing(lineRef, {
            toValue: { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 },
            duration: 0,
            useNativeDriver: true
        }).start();
    }, [start, end, lineRef]);

    return (
        <Animated.View
            style={[styles.line,
            {
                left: lineRef.x,
                top: lineRef.y,
                width: Math.abs(end.x - start.x),
                height: Math.abs(end.y - start.y),
                transform: [{ rotateZ: `$Math.atan2(end.y - start.y, end.x - start.x) + (180/Math.PI)deg`}]
            },
            ]}
            />
    );

};

const ReadjustableLine = () => {
    const [startPosition, setStartPosition] = useState({ x: 100, y: 100 });
    const [endPosition, setEndPosition] = useState({ x: 200, y: 200 });
  
    const panResponderStart = useRef(PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        setStartPosition({ x: gestureState.x0, y: gestureState.y0 });
      },
      onPanResponderMove: (e, gestureState) => {
        setStartPosition({ x: gestureState.moveX, y: gestureState.moveY });
      },
    })).current;
  
    const panResponderEnd = useRef(PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        setEndPosition({ x: gestureState.x0, y: gestureState.y0 });
      },
      onPanResponderMove: (e, gestureState) => {
        setEndPosition({ x: gestureState.x0, y: gestureState.y0 });
      },
    })).current;
  
    return (
      <View>
        <Node position={startPosition} onPanResponderGrant={panResponderStart.grant} onPanResponderMove={panResponderStart.move} />
        <Line start={startPosition} end={endPosition} />
        <Node position={endPosition} onPanResponderGrant={panResponderEnd.grant} onPanResponderMove={panResponderEnd.move} />
      </View>
    );
  };

  export default {ReadjustableLine, Node, Line};


