import React from 'react';
import { View, Image, Text, Button, ImageBackground } from 'react-native';
import { AppImages } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import SignIn from './SignIn';
import Login from './Login';

const FirstScreen = (props) => {
    const navigation = useNavigation();

    const handleRegisterPress = () => {
        props.navigation.navigate('SignIn');
    };
    const handleLogInPress = () => {
        props.navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            {/* <Text style={{position: 'absolute', fontSize: 40 , fontWeight:"900", marginTop:30}}>BULAWAA</Text>  */}
            <View style={{ flexDirection: 'row', position: 'absolute', }}>
                <Button
                    title="Register"
                    color="#841584"
                    style={{ marginRight: 10 }}
                    onPress={handleRegisterPress}
                />
                <Button
                    title="Login"
                    color="#841584"
                    style={{ marginRight: 10 }}
                    onPress={handleLogInPress}
                />
            </View>

        </View>


    );
};
export default FirstScreen;
