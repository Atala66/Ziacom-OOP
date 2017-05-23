import { Component, OnInit } from '@angular/core';
// importamos el módulo Input
import { Input } from '@angular/core';
import {ImagesService} from './image-gallery.service'

@Component({
  moduleId: module.id,
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
  providers: [ImagesService]
})
export class ImageGalleryComponent implements OnInit {
    public title:string = 'Image Gallery';
    public selectedImage;
   // public images: Array<any>;
    public getPrueba;
    public images;


 constructor(
   // instanciamos una variable de servicio
   private _imagesService:ImagesService
 ){

 }

  ngOnInit() {
 // var prueba = this._imagesService.getPrueba();
  //console.log(prueba);

  this._imagesService.getImagenes().subscribe(
      data => {this.images = data},
      error => console.log(error),
      () => console.log('Imágenes traidas del servicio'));
  }


// la var data source es la que lleva todo el array de datos y la que vamos  a iterar
// lleva el decorador @Input lo que nos permitirá:
// pasarla como atributo en el componente
// inyectarla en otros componentes para comunicarse con ellos.
@Input() datasource;


  // métodos
  // setter de la imagen
  setSelectedImage(image){
    this.selectedImage = image;
  }

}
