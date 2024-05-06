
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Main from '../Main';

const SignIn = (props) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignIn = () => {
    if (!name || !phone || !email || !password) {
      Alert.alert('Incomplete Details', 'Please fill in all fields.');
    } else {
      Alert.alert('Registered Successfully !! ');
      props.navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="PhoneNumber"
        keyboardType="numeric"
        autoCapitalize="none"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Signup"
        color="#841584"
        style={{ marginRight: 10 }}
        onPress={handleSignIn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SignIn;

