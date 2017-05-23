import { Component, OnInit } from '@angular/core';
// importamos módulos de ruta
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor( 
    private _router: Router,
    private _activeRouter: ActivatedRoute,
    ) {
      // por qué en el cuerpo de la función constructora y no en el onInit?????
       this. _activeRouter.params.subscribe(params => console.log("side menu id parameter",params['id']));
   }

  ngOnInit() {
  }

}
