import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [userNumber, setUserNumber] = useState('');

  const handleVerify = () => {
    const randomNumber = Math.floor(Math.random() * 11); // Gera número de 0 a 10
    const userGuess = parseInt(userNumber, 10);

    if (userGuess === randomNumber) {
      Alert.alert('Você acertou!');
    } else {
      Alert.alert(`Você errou! O número era ${randomNumber}.`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Tente adivinhar o número de 0 a 10</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={userNumber}
        onChangeText={setUserNumber}
        placeholder="Digite o número"
      />
      <Button title="Verificar" onPress={handleVerify} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
});
