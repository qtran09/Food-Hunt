import { YelpRequest } from "./YelpRequest";
import { YelpResponse } from "./YelpResponse";
import {Platform} from 'react-native';

export class YelpClient{
    constructor(searchParams:any){
        this.yelpGet = new YelpRequest(searchParams)

    }
    private yelpGet: YelpRequest | undefined;
    private proxy = 'https://cors-anywhere.herokuapp.com/';
    public getAccessToken(): any{
        return (
          {
            method:'GET',
            headers:{
              Authorization: 'Bearer [YELP API KEY that I didnt want to spend time hiding or putting somewhere else]'
            }
          }
        );
      }

    public async getBusinessList(){
      try{
        const offset = await this.getRandomOffset();
        this.yelpGet?.setOffset(offset);
        const response = await fetch(this.buildSearchString(), this.getAccessToken());
        const json = await response.json();
        return json['businesses'];
      } catch(e){
        console.log("getBusinessList error: " + e);
      }
    }

    public async getRandomOffset(){
      try{
        const response = await fetch(this.buildSearchString(), this.getAccessToken());
        const json = await response.json();
        const total = json['total'];
        return total-(Math.floor(Math.random()*total));
      } catch(e){
        console.log("getRandomOffset error: " + e);
      }
    }

    public async getRandomRestaurant(){
      try{
        let businessList = await this.getBusinessList();
        if(!businessList || !businessList.length){
          return new YelpResponse(null);
        }
        const randomIndex = Math.floor(Math.random() * businessList.length);
        return new YelpResponse(businessList[randomIndex]);
      } catch(e){
        console.log("getRandomRestaurant error: " + e);
      }
    }
    public buildSearchString(){
        let buildString = '';
        if(Platform.OS === "web"){
          buildString += this.proxy;
        }
        buildString += 'https://api.yelp.com/v3/businesses/search?limit=50' 
        + this.yelpGet?.getAttributes() + this.yelpGet?.getCategories() + this.yelpGet?.getLocale() + this.yelpGet?.getOffset()
        + this.yelpGet?.getOpenAt() + this.yelpGet?.getOpenNow() + this.yelpGet?.getPrice() + this.yelpGet?.getRadius()
        + this.yelpGet?.getSortBy() + this.yelpGet?.getTerm() + this.getUserLocation();
        return buildString;
    }

    public getUserLocation(){
      let location = this.yelpGet?.getLocation();
      if(location){
        return location;
      }
      if(this.yelpGet?.getLatitude() && this.yelpGet?.getLongitude()){
        return this.yelpGet?.getLatitude() + this.yelpGet?.getLongitude();
      }
      return null;
    }
}