import {getIconComponent} from '@assets/icon';
import {getSize} from '@base/common/responsive';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '@screens/auth';
import HomeScreen from '@screens/home';
import ProfileScreen from '@screens/profile';
import Font from '@theme/Font';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  COURSE_SCREEN,
  HOME_SCREEN,
  NOTIFY_SCREEN,
  PROFILE_SCREEN,
  TOP_RANK_SCREEN,
} from './screen';

const Icon = getIconComponent('app');
const IconLib = getIconComponent('ionicons');

const HomeTab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <HomeTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === HOME_SCREEN) {
            iconName = 'IconView';
          } else if (route.name === COURSE_SCREEN) {
            iconName = 'IconView-1';
          } else if (route.name === TOP_RANK_SCREEN) {
            iconName = 'mail-unread';
            return (
              <IconLib
                name={iconName}
                color={focused ? '#0B0712' : '#656070'}
                size={getSize.m(26)}
              />
            );
          } else if (route.name === NOTIFY_SCREEN) {
            iconName = 'IconView-3';
          } else {
            iconName = 'IconView-4';
          }
          return (
            <Icon
              name={iconName}
              color={focused ? '#0B0712' : '#656070'}
              size={getSize.m(26)}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: '#FA9D1A',
        tabBarInactiveTintColor: '#C4C4C4',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarShowLabel: false,
      })}>
      <HomeTab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <HomeTab.Screen name={COURSE_SCREEN} component={LoginScreen} />
      <HomeTab.Screen name={TOP_RANK_SCREEN} component={LoginScreen} />
      <HomeTab.Screen name={NOTIFY_SCREEN} component={LoginScreen} />
      <HomeTab.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeTabNavigator;

export const styles = StyleSheet.create({
  tabBar: {
    height: getSize.m(70),
    paddingTop: getSize.m(10),
    display: 'flex',
    paddingBottom: getSize.m(12),
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },

  tabBarLabelStyle: {
    fontSize: getSize.m(8.5, 0.3),
    fontFamily: Font.font_bold_700,
    marginBottom: getSize.m(10),
  },
});
