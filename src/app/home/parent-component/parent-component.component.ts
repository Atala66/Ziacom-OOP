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
  public stringChild: string = 'Hello World (paso de string)';
  public objectToChild:Object = {'id':1, 'name':'My Object'};


  onNotify(message:string):void {
    alert(message);
  }

  constructor() { }

  ngOnInit() {
  }

}
