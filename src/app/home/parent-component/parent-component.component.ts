import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ChildComponentComponent } from '.././child-component/child-component.component';

@Component({
  moduleId: module.id,
  selector: 'parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  //directives: [ChildComponentComponent]  DEPRECADO!!! USAR EL ARRAY DE DECLARATIONS
  // DE @NGmODULE EN EL MODULO PRINCIPAL 
})
export class ParentComponentComponent implements OnInit {
  public titleComponent: string = 'I am the father component';
  public author: string = 'John Doe';
  public titleToChild: string = 'Soy el texto pasado al componente hijo';
  public otherTitleToChild: string = 'Otro texto para el hijo';
  // input para el hijo
 /*public objectToChild = {
    id: 1,
    title: 'Soy el objeto pasado al cmp hijo',
    isObject: true,
    numProps:4
  } */ 


  onNotify(message:string):void {
    alert(message);
  }

  constructor() { }

  ngOnInit() { }

}
