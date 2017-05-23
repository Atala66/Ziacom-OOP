
// importamos injectable
import { Injectable } from '@angular/core';
// importamos módulo http
import { Http } from '@angular/http';
// importamos libreria de rxjs para mapeo/ hacer y captura de errores
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// importamos módulo Observable de RX
import { Observable } from 'rxjs/Rx';

// repasar esto. para que sirve exactamente el decorador Injectable???
@Injectable()
export class ImagesService{
      // cuidado!!! para traer jsons estáticos de la aplicacion tenemos que guardarlos en assets
      private imagesUrl = "assets/data/images-data.json";

    constructor(
        private http:Http
    ){

    }

    // métodos
      /* getPrueba(){
         return 'Soy una string del servicio';
     } */

// trae las imágenes
     getImagenes(){
         return this.http.get(this.imagesUrl)
            .map(res => res.json());
     }

}