import React from 'react';
import { View, Text, Image } from 'react-native';
import { AppImages } from '../../assets';

const Splash = () => {
  return (
    <View style={{ flex:1,alignItems:"center",justifyContent:"center" }}>
      <Image source={AppImages.Splash} 
      style={{ 
      width: 160, 
      height: 160, 
      borderRadius: 100,  
      }} />
    </View>
  );
};

export default Splash;
