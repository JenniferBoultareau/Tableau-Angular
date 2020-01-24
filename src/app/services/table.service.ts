import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private url: string = "/assets/data/city.json";
  private cities: City[];

  constructor(private http: HttpClient) { }

  getcities(): Observable<City[]> {
    return this.http.get<City[]>(this.url);
  }

  addCities(city: City) {
    this.cities.push(city);
    this.getcities();
  }
}
