import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public cities = [];

  constructor( private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getcities().subscribe(data => (this.cities = data));
  }

}
