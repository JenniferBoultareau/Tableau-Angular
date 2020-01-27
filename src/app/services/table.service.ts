import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private url: string = "api/cities";

  private cities: City[];

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.url);
  }

  addCities(city: City): Observable<City[]> {
    return this.http.post<City[]>(this.url, city);
  }
}
