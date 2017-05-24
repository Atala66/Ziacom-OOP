import { Component, OnInit } from '@angular/core';
// importamos el módulo Input
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {ImagesService} from './shared-services/image-gallery.service'

@Component({
  moduleId: module.id,
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  providers: [ImagesService]
})
export class ImageGalleryComponent implements OnInit {
    public title:string = 'Image Gallery';
    public selectedImage:boolean;
    public showModal:boolean;
    public getPrueba;
    public images;
   // vamos a pasar el array de imagenes al componente hijo 
 @Input()  public datasource:Array<any>;
    // la var data source es la que lleva todo el array de datos y la que vamos  a iterar
    // lleva el decorador @Input lo que nos permitirá:
    // pasarla como atributo en el componente
    // inyectarla en otros componentes para comunicarse con ellos.

 constructor(
   // instanciamos una variable de servicio
   private _imagesService:ImagesService
 ){

// le vamos a pasar este aray de imagenes a home (c.hijo)
    this.datasource = [
      {"url": "assets/img/frog.jpg"},
      {"url": "assets/img/architecture.jpg"},
      {"url": "assets/img/flowers.jpg"},
      {"url": "assets/img/forest.jpg"},
      {"url": "assets/img/people.jpg"},
      {"url": "assets/img/people.jpg"},
      {"url": "assets/img/people.jpg"},
      {"url": "assets/img/people.jpg"},
      {"url": "assets/img/people.jpg"},
      {"url": "assets/img/people.jpg"},
      {"url": "assets/img/people.jpg"},
      {"url": "assets/img/people.jpg"}

    ]   

 }

  ngOnInit() {
 // var prueba = this._imagesService.getPrueba();
  //console.log(prueba);

 this._imagesService.getImagenes().subscribe(
      data => {this.images = data},
      error => console.log(error),
      () => console.log('Imágenes traidas del servicio')); 
    // this.images = this.datasource;
  }
  

  // métodos
  // setter de la imagen
  setSelectedImage(image){
    this.selectedImage = image;
  }

  // deselect de la imagen
  deselectImage(image){
    this.selectedImage = false;
   var closeModal = this.showModal = false;
  
  }

}
