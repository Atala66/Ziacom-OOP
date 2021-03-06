import { Component, OnInit, OnChanges } from '@angular/core';
import { Input, Output,EventEmitter} from '@angular/core';
//import { ObjectModel } from './child.model';
@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
    public titleComponent = 'I am the Child Component and I am nested';

    // la prop dataToFather va del hijo padre y se tiene que disparar con un evento
    @Output() dataToFather:EventEmitter<string> = new EventEmitter<string>();

// la propiedad title en el hijo es igual a lo que venga por el padre
     @Input () titleChild:string;
    @Input ()giveMeObject:Object;
    // vamos a devolverle un objeto al padre a traves de la emision de un evento
    @Output() returnChangedObject:EventEmitter<Object> = new EventEmitter<Object>();
    


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

  ngOnInit() {  }

    ngOnChanges(){  }


    onClick(){
      this.dataToFather.emit(' ....y yo soy los datos pasados de vuelta al padre ')
    }

    changeObject(){
      // instanciamos la propiedad recogida con el output y la devolvemos
      this.returnChangedObject.emit(this.giveMeObject);
    }

}
