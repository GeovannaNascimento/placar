import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcador de Placar</Text>
      <Text style={styles.score}>{score}</Text>
      <Button title="Incrementar" onPress={incrementScore} />
      <Button title="Zerar" onPress={resetScore} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  score: {
    fontSize: 30,
    marginBottom: 20,
  },
});
