
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Main from '../Main';

const Login = (props) => {
    const navigation = useNavigation();


    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const handleLoginIn = () => {
        if (!name || !password) {
            Alert.alert('Incomplete Details', 'Please fill in all fields.');
        } else {
            //Alert.alert('Details', `Name: ${name}\nPhone-Number: ${phone}\nEmail: ${email}\nPassword: ${password}`);
            props.navigation.navigate('Main');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login </Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                autoCapitalize="none"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button
                title="Login"
                color="#841584"
                style={{ marginRight: 10 }}
                onPress={handleLoginIn}
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

export default Login;

