import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = environment.title;

  archives = [
    {year: 1990, month: 1},
    {year: 2000, month: 2},
    {year: 2010, month: 3},
    {year: 2020, month: 1}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
