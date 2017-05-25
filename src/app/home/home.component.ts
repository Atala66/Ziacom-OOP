import { Component, OnInit } from '@angular/core';
// modulos para trabajar con el router y parámetros de la url
//recojemos params para inyectar rutas recojer paramUrls, etc.
// lo tenemos que inicializar en el constructor
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Input,Output, EventEmitter } from '@angular/core';
import { ImageGallery } from './home.model';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {
  public paramUrl;
 public imagenes;
 public imageGallery:ImageGallery;

  // como me traigo el datasouce de imágenes que quiero sin llamar 
  // al servicio del componente padre??
 public datasource:Array<any>;
 public newGallery;
  
  constructor(
    
    private _router: Router,
    private _activateRouter: ActivatedRoute
  ) { 

    /*this.imagenes = new ImageGallery();
    this.imagenes.setImagenes = this.datasource; */

  }

// HACER : CREAR UN OBJETO GALERIA
  ngOnInit() {

    this.datasource = [
      {'url': 'assets/img/frog.jpg'},
      {'url': 'assets/img/architecture.jpg'},
      {'url': 'assets/img/flowers.jpg'},
      {'url': 'assets/img/forest.jpg'},
      {'url': 'assets/img/people.jpg'},
      {'url': 'assets/img/people.jpg'},
      {'url': 'assets/img/people.jpg'},
      {'url': 'assets/img/people.jpg'},
      {'url': 'assets/img/people.jpg'},
      {'url': 'assets/img/people.jpg'},
      {'url': 'assets/img/people.jpg'},
      {'url': 'assets/img/people.jpg'}

    ] 

  
  }




 
}
