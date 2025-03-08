import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const colors = ['red', 'blue', 'green', 'lightblue', 'purple', 'beige', 'cornsilk','pink','royalblue','steelblue','tan',   
                'wheat','plum'];

const App = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors[colorIndex] }]}> 
          <Text style={styles.text}> {colors[colorIndex]}</Text>
      <TouchableOpacity style={styles.button} onPress={changeColor}>
        <Text style={styles.buttonText}>Click to change</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: 'lavender',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
