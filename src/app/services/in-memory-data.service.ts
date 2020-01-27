import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const cities = [
      {
        id: 1,
        city: "Copenhague",
        country: "Danemark",
        population: 623404,
        area: 88
      },
      {
        id: 2,
        city: "Paris",
        country: "France",
        population: 2187526,
        area: 105
      },
      {
        id: 3,
        city: "Londres",
        country: "Royaume-Uni",
        population: 8908081,
        area: 1572
      },
      {
        id: 4,
        city: "Madrid",
        country: "Espagne",
        population: 3266126,
        area: 608
      }
    ];
    return {cities};
  }

  genId(cities: City[]): number {
    return cities.length > 0 ? Math.max(...cities.map(city => city.id))+ 1 : 11;
  }
}
