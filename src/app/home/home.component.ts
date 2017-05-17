import { Component, OnInit } from '@angular/core';
// modulos para trabajar con el router y parámetros de la url
//recojemos params para inyectar rutas recojer paramUrls, etc.
// lo tenemos que inicializar en el constructor
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public paramUrl;

  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute
  ) { }

  ngOnInit() {

    this._activateRouter.params.forEach((params: Params) => {
      this.paramUrl = params['id'];
      console.log(params);

    });

  }

  // métodos de la clase

}
