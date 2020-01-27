import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';
import { City } from '../models/city';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public cities: City[];

  // public cities = [];

  constructor( private tableService: TableService) { }

  // ngOnInit() {
  //   this.tableService.getcities().subscribe(data => (this.cities = data));
  // }

  getCities(): void {
    this.tableService.getCities().subscribe(cities => this.cities = cities)
  }

  ngOnInit() {
    this.getCities();
  }

}
