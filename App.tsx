import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './app/WelcomePage';
import CountriesPage from './app/CountriesPage';
import AboutPage from './app/AboutPage';
import CountryDetailPage from './app/CountryDetailPage';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  const navigation = useNavigation();

  const handleQuit = () => {
    navigation.navigate('Welcome' as never);
  };

  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f5f5f5',
        },
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={CountriesPage}
        options={{ 
          title: 'Accueil',
          headerShown: false,
        }}
      />
      <Drawer.Screen 
        name="About" 
        component={AboutPage}
        options={{ 
          title: 'À propos',
          headerShown: false,
        }}
      />
      <Drawer.Screen 
        name="Quit"
        component={CountriesPage}
        options={{ 
          title: 'Quitter',
          headerShown: false,
        }}
        listeners={{
          drawerItemPress: (e) => {
            e.preventDefault();
            handleQuit();
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Main" 
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CountryDetail" 
          component={CountryDetailPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}