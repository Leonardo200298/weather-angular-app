import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './waether';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CityWeatherService {
  private apiWeather: string = 'https://api.weatherapi.com/v1/current.json?';
  private key: string = 'key=d6fa30f36a7d4de295a155612222911';


  constructor(private http: HttpClient) { }

  public searchCity(query: string):Observable<Weather[]> {
    const request = this.http.get<Weather[]>((this.apiWeather + this.key + `&q=+${query}`));
  
    return request;
  }
}
