import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Node, Line } from './Node';

const RandomLineGenerator = ({ numLines, complexity }) => {
  const [nodes, setNodes] = useState([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const generateNodes = () => {
      // Generate random node positions
      setNodes([...Array(numLines).keys()].map(() => ({ x: Math.random() * 100, y: Math.random() * 100 })));
    };

    const generateLines = () => {
      // Generate random lines connecting nodes
      setLines([...Array(numLines).keys()].map(() => ({ start: nodes[Math.floor(Math.random() * numLines)], end: nodes[Math.floor(Math.random() * numLines)] })));
    };

    generateNodes();
    generateLines();
  }, [numLines, complexity]);

  return (
    <View>
      {nodes.map((node, index) => (
        <Node key={index} position={node} />
      ))}
      {lines.map((line, index) => (
        <Line key={index} start={line.start} end={line.end} />
      ))}
    </View>
  );
};

export default RandomLineGenerator;