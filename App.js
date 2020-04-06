import React from 'react';
import { View, FlatList, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, navigate } from './RootNavigation';
import * as RootNavigation from './RootNavigation';
import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import albumData from "./src/json/albums.json";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AlbumScreen}
          options={{
            title: albumData.albumTitle,
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigationRef.current?.navigate("Detail",albumData)}>
                <Image
                  source={require('./baseline_mail_black_18dp.png')}
                  style={{ width: 24, height: 24, marginRight: 15 }}
                />
              </TouchableOpacity>
            ),

          }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: albumData.detailTital,
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;