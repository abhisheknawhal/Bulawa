import React from "react";
//import {View,} from "react-native";
//import Main from "./src/components/OnBoarding/Main";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from "./src/navigator/MainStack";


export default function App() {
  const navigationRef = useNavigationContainerRef();
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
