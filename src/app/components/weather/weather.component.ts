import { Component, OnInit } from '@angular/core';
import { CityWeatherService } from 'src/app/city-weather.service';
import { Weather } from 'src/app/waether';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  cities:Weather = {
    "city":"",
    "country":"",
    "temp":"",
    "cond":""
  };

  constructor(private weatherService: CityWeatherService) { }
  
  public searchCityWeatherComponent(query:string):void{
   
    let response = this.weatherService.searchCity(query);
    response.subscribe((cities:any)=>{
      console.log(cities);
      this.cities = {
        "city":cities.location.name,
        "country":cities.location.country,
        "temp":cities.current.temp_c,
        "cond":cities.current.condition.text
      };
    });
  }



}
