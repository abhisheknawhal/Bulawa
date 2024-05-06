import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import { AppImages } from '../assets';
import slides from './slides';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const [focusedIndex, setFocusedIndex] = useState(0);

  const onViewableItemsChanged = React.useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const firstVisibleIndex = viewableItems[0].index || 0;
      setFocusedIndex(firstVisibleIndex);
    }
  }).current;

  const renderItem = ({ item, index }) => {
    const scale = index === focusedIndex ? 1.4 : 1;
    return (
      <View style={[styles.itemContainer, { transform: [{ scale }] }]}>
        <View style={{ width: 100, height: 100, borderRadius: 100, alignItems: "center", justifyContent: "center" }}>
          <Image source={item.image} style={{ width: 60, height: 60, }} />
        </View>
        <Text style={{ marginLeft: 20, fontSize:10 }}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>

      <View style={styles.content}>
        <FlatList
          horizontal
          data={slides}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50
          }}

        />
      </View>
    </View>
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = focused ? AppImages.Home : AppImages.Home;
          } else if (route.name === 'Profile') {
            iconSource = focused ? AppImages.Profile : AppImages.Profile;
          } else if (route.name === 'Settings') {
            iconSource = focused ? AppImages.Settings : AppImages.Settings;
          }
          return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#841584',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 470
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 60,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',

  },
});

export default Main;
