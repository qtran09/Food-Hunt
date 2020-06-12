import React from 'react';
import { View, Image, Text, Alert, PermissionsAndroid, Platform } from "react-native";
import { styles, home } from '../Assets/Styles';
import { NavigationButton } from '../Assets/NavigationButton';
import { YelpClient } from '../Yelp/YelpClient';

export function HomeScreen({ navigation }: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/mainLogo.png')} style={home.logo} />
      <Text style={styles.caption}>Find something new</Text>
      <View style={[styles.row, { bottom: -50 }]}>
        <NavigationButton onPress={() => { navigation.push('Secondary') }} title="Search by Criteria" />
        <NavigationButton onPress={() => { showRandomRestaurant(navigation) }} title="Random by location" />
      </View>
    </View>
  );
}
export async function showRandomRestaurant(navigation: any) {
  if (Platform.OS === "android") {
    const granted = await PermissionsAndroid.request('android.permission.ACCESS_FINE_LOCATION');
    if (granted !== 'granted') {
      Alert.alert("Permission not granted", "Permission for your location is required")
      return;
    }
  }
  const searchParams = { 'limit': 50, 'latitude': 0, 'longitude': 0 };
  navigator.geolocation.getCurrentPosition(async position => {
    if (!position) {
      Alert.alert("Failed to get position","Failed to get your position, please try again");
      return;
    }
    searchParams['latitude'] = position['coords']['latitude'];
    searchParams['longitude'] = position['coords']['longitude'];
    const yelp = new YelpClient(searchParams);
    const restaurant = await yelp.getRandomRestaurant();
    navigation.push('Results', {
      yelpResponse: restaurant
    })
  },
    error => {
      Alert.alert("Location Error", "Unable to get your location.");
    },
    { enableHighAccuracy: true, timeout: 2000, maximumAge: 10000 });
}