import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripScreen from '@screens/profile/TripScreen';
import VoucherScreen from '@screens/profile/VoucherScreen';
import React from 'react';
import HomeTabNavigator from './HomeTab';
import { TAB_NAVIGATION, TRIP_SCREEN, VOUCHER_SCREEN } from './screen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={TAB_NAVIGATION}>
        <Stack.Screen name={TAB_NAVIGATION} component={HomeTabNavigator} />
        <Stack.Screen name={TRIP_SCREEN} component={TripScreen} />
        <Stack.Screen name={VOUCHER_SCREEN} component={VoucherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
