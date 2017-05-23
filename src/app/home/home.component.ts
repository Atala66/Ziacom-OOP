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
  public images;

  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute
  ) { 

    /*  this.images = [
      {"url": "assets/img/frog.jpg"},
      {"url": "assets/img/architecture.jpg"},
      {"url": "assets/img/flowers.jpg"},
      {"url": "assets/img/forest.jpg"},
      {"url": "assets/img/frog2.jpg"},
      {"url": "assets/img/gecko.jpg"},
      {"url": "assets/img/hong-kong.jpg"},
      {"url": "assets/img/monkey.jpg"},
      {"url": "assets/img/people.jpg"},
      {"url": "assets/img/bird.jpg"},
      {"url": "assets/img/stork.jpg"},
      {"url": "assets/img/sunset.jpg"},

    ] */

  }

  ngOnInit() {

  }

  // métodos de la clase

}
