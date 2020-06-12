import React from 'react';
import { Text, View, TextInput, Alert, Image } from 'react-native';
import { styles, secondary, controls } from '../Assets/Styles'
import { NavigationButton, SelectionButton } from "../Assets/NavigationButton";
import { YelpClient } from '../Yelp/YelpClient';

let searchParams: { [key: string]: any } = { 'limit': 50 };
export function QuestionnaireScreen({ navigation }: any): JSX.Element {
  return (
    <View style={secondary.container}>
      <View style={[secondary.header, styles.center]}>
        <Text style={[styles.caption, styles.center]}>Food</Text>
        <Image source={require('../Assets/mainLogoSmall.png')} style={{ width: 28, height: 27, marginHorizontal: 4 }}></Image>
        <Text style={[styles.caption, styles.center]}>Hunt</Text>

      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Location</Text>
        <View style={styles.lineHeader}></View>
      </View>
      <TextInput style={controls.centeredTextInput} placeholder="Zip Code or City and state" defaultValue={searchParams['location']} onChangeText={(event: any) => { setSearchParams('location', event, false) }} />
      <View style={styles.row}>
        <Text style={styles.label}>Cuisine</Text>
        <View style={styles.lineHeader}></View>
      </View>
      <TextInput style={controls.centeredTextInput} placeholder="Cuisine" defaultValue={searchParams['categories']} onChangeText={(event: any) => { setSearchParams('categories', event, false) }} />
      <View style={styles.row}>
        <Text style={styles.label}>Price</Text>
        <View style={styles.lineHeader}></View>
      </View>
      <View style={styles.row}>
          <SelectionButton onPress={() => { setSearchParams('price', 1,true) }} title="$" />
          <SelectionButton onPress={() => { setSearchParams('price', 2,true) }} title="$$" />
          <SelectionButton onPress={() => { setSearchParams('price', 3,true) }} title="$$$" />
          <SelectionButton onPress={() => { setSearchParams('price', 4,true) }} title="$$$$" />
      </View>
      <View style={[styles.row]}>
        <Text style={styles.label}>Open now?</Text>
        <View style={styles.lineHeader}></View>
      </View>
      <View style={styles.row}>
        <SelectionButton onPress={() => { setSearchParams('open_now', 'true',true) }} title="Yes" />
        <SelectionButton onPress={() => { setSearchParams('open_now', 'false',true) }} title="No" />
      </View>
      <View style={{ alignContent: 'center', justifyContent: 'center', flex: 1, alignSelf: 'center' }}>
        <NavigationButton onPress={() => { submitQuery(navigation) }} title="Submit" />
      </View>
    </View>
  );
}

export async function submitQuery(navigation: any) {
  if (!validateLocation()) {
    Alert.alert("Missing Location", "Need to enter location to search.");
    return;
  }
  try {
    const yelp = new YelpClient(searchParams);
    const randomRestaurant = await yelp.getRandomRestaurant();
    navigation.push('Results',
      {
        yelpResponse: randomRestaurant
      });
  } catch (e) {
    console.log("Submit query error: " + e);
  }

}
function validateLocation() {
  return 'location' in searchParams && searchParams['location'];
}
function setSearchParams(key: any, value: any, alert: boolean) {
  searchParams[key] = value;
  if(alert){
    const label = (key === "open_now") ? "Open now" : "Price";
    Alert.alert("Value Changed", label + " status changed to " + value);
  }
}