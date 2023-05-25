import React, { useState } from 'react';
import { Button, TextInput, View, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebaseConfig';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', user);
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
      <Button title='Sign Up' onPress={signUp} />
    </View>
  );
};

export default SignUpScreen;