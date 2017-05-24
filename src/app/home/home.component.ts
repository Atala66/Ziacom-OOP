import { Component, OnInit } from '@angular/core';
// modulos para trabajar con el router y parámetros de la url
//recojemos params para inyectar rutas recojer paramUrls, etc.
// lo tenemos que inicializar en el constructor
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Input,Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public paramUrl;
  public datasource;
  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute
  ) { 

  }

  ngOnInit() {
   
  }

  // métodos de la clase


}
