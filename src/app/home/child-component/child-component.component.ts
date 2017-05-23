import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
 // public name: string = 'Child Component';
    public titleComponent = 'Child Component';
  // ARRAY DE DATOS A PELO: Normalmente vendran de un servidor y los consumiremos con un servicio
  books = [
    {
      title: 'Love Story',
    price: 'Rs. 1400'

    },
    {
      title: 'Two States',
      price: 'Rs. 1700'
    },
    {
      title: 'Computer fundamentals',
      price: 'Rs. 1000'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
