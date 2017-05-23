import { Component, OnInit } from '@angular/core';
import {ChildComponentComponent} from '.././child-component/child-component.component';

@Component({
  moduleId: module.id,
  selector: 'parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
 //directives: [ChildComponentComponent]  DEPRECADO!!! USAR EL ARRAY DE DECLARATIONS
                                          // DE @NGmODULE EN EL MODULO PRINCIPAL 
})
export class ParentComponentComponent implements OnInit {
      public titleComponent:string = 'Parent Component';
      public author:string = 'John Doe';
  constructor() { }

  ngOnInit() {
  }

}
