import React, { useState } from 'react';
import { Button, TextInput, View, Alert } from 'react-native';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebaseConfig';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', user);
    } catch (error) {
      Alert.alert('Error!', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Login' onPress={login} />
    </View>
  );
};

export default LoginScreen;