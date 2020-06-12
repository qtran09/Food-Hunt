import React from 'react';
import { View, Image, Text, Linking } from "react-native";
import { styles, restaurant } from '../Assets/Styles';
import { NavigationButton } from '../Assets/NavigationButton';

export function ResultsScreen({ route, navigation }: any): JSX.Element {
  const { yelpResponse } = route.params

  //YelpResponse default value. No name means no results
  if (yelpResponse.getName() === "") {
    return ResultsErrorScreen(navigation);
  }
  else {
    return ResultsBusinessScreen(yelpResponse, navigation);
  }
}


export function ResultsErrorScreen(navigation: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={require('../Assets/error.jpg')} style={restaurant.businessPic}></Image>
      <Text>No search results matched your request</Text>
      <NavigationButton onPress={() => { navigation.push('Home') }} title="Go to Home" />
    </View>
  );
}
export function openMaps(latitude: number, longitude: number) {
  let currentLat=Infinity,currentLong=Infinity;
  let test = 'https://www.google.com/maps/dir/?api=1&destination=' + latitude + ',' + longitude + '&dir_action=navigate';
  navigator.geolocation.getCurrentPosition(async position =>{
    currentLat = position['coords']['latitude'];
    currentLong = position['coords']['longitude'];
    test += '&origin=' + currentLat + ',' + currentLong;
    Linking.openURL(test);

  },
  error =>{
    Linking.openURL(test);
  },);
}
export function ResultsBusinessScreen(yelpResponse: any, navigation: any) {
  const businessLocation = yelpResponse.getLocation();
  const businessCoordinates = yelpResponse.getCoordinates();
  let businessImageString = yelpResponse.getImage();
  if (businessImageString === "") {
    businessImageString = require('../Assets/noimage.jpg');
  }
  const businessImage = { uri: businessImageString };
  return (
    <View style={styles.container}>
      <Text style={restaurant.info}>Try out...</Text>
      <Text style={restaurant.businessName}>{yelpResponse.getName()}</Text>
      <Image source={businessImage} style={restaurant.businessPic} />
      <Text style={restaurant.info}>Address: {businessLocation['address1']}</Text>
      <Text style={restaurant.info}>{businessLocation['city']},{businessLocation['state']}, {businessLocation['zip_code']}</Text>
      <Text style={restaurant.info}>Price: {yelpResponse.getPrice()}</Text>
      <Text style={restaurant.info}>Rating: {yelpResponse.getRating()}</Text>
      <Text style={restaurant.info}>Review Count: {yelpResponse.getReviewCount()}</Text>
      <View style={[styles.row, { bottom: -50 }]}>
        <NavigationButton onPress={() => { navigation.push('Home') }} title="Start Over" />
        <NavigationButton onPress={() => { openMaps(yelpResponse.getCoordinates()['latitude'], yelpResponse.getCoordinates()['longitude']) }} title="Open in Maps" />
      </View>
    </View>
  );
}