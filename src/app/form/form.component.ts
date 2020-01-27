import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableService } from '../services/table.service';
import { City } from '../models/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  cityForm: FormGroup;

  public cities = [];

  constructor(private formBuilder: FormBuilder,
              private tableService: TableService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.cityForm = this.formBuilder.group({
      city: '',
      country: '',
      population: '',
      area: ''
    });
  }

  onSubmitForm() {
    const formValue = this.cityForm.value;
    const newCity = new City(
      formValue['id'],
      formValue['city'],
      formValue['country'],
      formValue['population'],
      formValue['area']
      );
      console.log(newCity);
    this.tableService.addCities(newCity).subscribe(city => {this.cities.push(city)})
    this.router.navigate(['']);
  }

}


