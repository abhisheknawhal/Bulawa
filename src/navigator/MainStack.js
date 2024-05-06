import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState, useRef } from 'react';
import { Splash } from '..';
import Main from '../components/Main';
import SignIn from '../components/OnBoarding/SignIn';
import FirstScreen from '../components/OnBoarding/FirstScreen';
import Login from '../components/OnBoarding/Login';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  const [enableSplash, setEnableSplash] = useState(true);

  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setEnableSplash(false);
    }, 2000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      {enableSplash && <Stack.Screen name="Splash" component={Splash} />}

      <Stack.Screen name="First" component={FirstScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />


    </Stack.Navigator>

  );
}
