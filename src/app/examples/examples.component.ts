import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms'
import { HttpService } from "../service/http.service";

@Component({
  selector: 'rb-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})

export class ExamplesComponent {
  user = {
    username: '',
    password: '',
    gender: 'male'
  };

  genders = [
    'male',
    'female'
  ]

  constructor(private httpService: HttpService) {
  
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
