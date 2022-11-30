import { Component, OnInit } from '@angular/core';
import { CityWeatherService } from 'src/app/city-weather.service';
import { Weather } from 'src/app/waether';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  cities:Weather[] = [];

  constructor(private weatherService: CityWeatherService) { }

  public searchCityWeatherComponent(query:string):void{
    let response = this.weatherService.searchCity(query);
    this.cities=response;
  }



}
