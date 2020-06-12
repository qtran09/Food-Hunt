import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as home from './Screens/Home';
import * as question from './Screens/Questionnaire';
import * as results from './Screens/RestaurantResult';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        {HomeStack()}
        {SecondaryStack()}
        {ResultsStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function HomeStack(){
  return (
    <Stack.Screen
      name="Home"
      component={home.HomeScreen}
      />
  );
}

export function SecondaryStack(){
  return (
    <Stack.Screen 
      name="Secondary" 
      component={question.QuestionnaireScreen}
      />
  );
}
export function ResultsStack(){
  return (
    <Stack.Screen 
      name="Results" 
      component={results.ResultsScreen} 
      />
  );
}

