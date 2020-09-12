import React from 'react';

// Libraries
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Screens
import {StartScren} from '../Containers/StartScreen';
import {TrialGenderScreen, TrialHeightScreen} from '../Containers/TrialScreen';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function AppNavigation() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'StartScren'} headerMode={'none'}>
          <Stack.Screen
            name={'StartScren'}
            component={StartScren}
            options={{
              gestureDirection: 'vertical',
            }}
          />
          <Stack.Screen
            name={'TrialGenderScreen'}
            component={TrialGenderScreen}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
          <Stack.Screen
            name={'TrialHeightScreen'}
            component={TrialHeightScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
