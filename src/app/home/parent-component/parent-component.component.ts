// importamos los modulos vista de los hijos y despues de que se inicialize la vista
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Input } from '@angular/core';
// necesitamos el módulo hijo importado
import { ChildComponentComponent } from '.././child-component/child-component.component';
import { SystemMessageComponent } from '.././system-message/system-message.component';

@Component({
  moduleId: module.id,
  selector: 'parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  //directives: [ChildComponentComponent]  DEPRECADO!!! USAR EL ARRAY DE DECLARATIONS
  // DE @NGmODULE EN EL MODULO PRINCIPAL 
})
export class ParentComponentComponent implements OnInit, AfterViewInit {
  public titleComponent: string = 'I am the father component';
  public author: string = 'John Doe';
  public stringChild: string = 'Hello World (paso de string)';
  public objectToChild: Object = { 'id': 1, 'name': 'My Object' };

  // decorador(param componente):var a utilizar:Instancia del Componente
  @ViewChild(ChildComponentComponent) child: ChildComponentComponent;
  // utilizamos como selecor el tipo de componente y con el, buscaremos en la vista.
  @ViewChild(SystemMessageComponent) findMessage: SystemMessageComponent;

  onNotify(message: string): void {
    alert(message);
  }

  giveMeData(data: Object) {
    console.log(data);

  }


  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log(this.child);
    this.findMessage.message = 'Soy el mensaje inicializado en la vista de sistem message';
  }

  // recuerda! ahora tengo acceso a todos las propiedades y métodos
  // de system Message desde aqui (padre)
  toogleMessage() {
     this.findMessage.active ? this.findMessage.hide() : this.findMessage.show();
  }

}
