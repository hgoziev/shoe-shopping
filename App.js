import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createSwitchNavigator} from 'react-navigation';

import SignUp from './screens/SingUp/SignUp';
import Welcome from './screens/welcome/Welcome';
import Login from './screens/Login/Login';
import Profile from './screens/profile/Profile';
import Products from './screens/products/Products';
import MyBag from './screens/MyBag/MyBag';
import Saved from './screens/Saved/Saved';
import Payment from './screens/Payment/Payment';
import Review from './screens/Review/Review';
import Checkout from './screens/Checkout/Checkout';
import Icon from 'react-native-vector-icons/Ionicons';
import CreditCard from './screens/Payment/CreditCard';
import Success from './screens/Payment/Success';
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const CS = createStackNavigator();

const TabStack = () => (
  <Tabs.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Shop') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Saved') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'My Cart') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'md-person' : 'md-person-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'rgb(0, 219, 228)',
      inactiveTintColor: 'rgb(86, 86, 86)',
      style: {
        backgroundColor: 'white',
        elevation: 5,

        height: 64,
        borderWidth: 1,
        borderColor: 'rgb(243, 243, 244)',
      },
    }}>
    <Tabs.Screen name="Shop" component={Products} />
    <Tabs.Screen name="Saved" component={Saved} />
    <Tabs.Screen name="My Cart" component={MyBag} />
    <Tabs.Screen name="Profile" component={Profile} />
  </Tabs.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="TabStack" component={TabStack} />

        <Stack.Screen name="CreditCard" component={CreditCard} />
        <Stack.Screen name="Success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
