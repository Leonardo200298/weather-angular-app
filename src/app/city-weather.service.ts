import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './waether';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherService {
  private apiWeather: string = 'https://api.weatherapi.com/v1/current.json?';
  private key: string = 'key=d6fa30f36a7d4de295a155612222911';


  constructor(private http: HttpClient) { }

  public searchCity(query: string): Weather[] | any {
    const request = this.http.get<Weather[]>((this.apiWeather + this.key + `&q=+${query}`));
    let cities: Weather[] = [];
    request.subscribe((citiesCopy: Weather[] | any) => {
      citiesCopy.map((elem: Weather | any) => {
        return cities.push({
          'city-name': elem.location.name,
          'country': elem.location.country,
          'icon': elem.current.condition.icon
        });
      })
    })
    return cities;
  }
}
