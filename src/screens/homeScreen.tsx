import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { Image } from 'react-native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (username === 'admin' && password === 'admin123') {
      navigation.navigate('Contacts');
    } else {
      setError('Credenciais inválidas.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Image source={require('../../assets/logo.webp')} style={styles.imageContainer} resizeMode="contain" />
        <Text style={styles.header}>Login</Text>
        <TextInput
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  formContainer: {
    maxWidth: 400, 
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
});