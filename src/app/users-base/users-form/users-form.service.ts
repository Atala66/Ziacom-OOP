
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

@Injectable()

export class UserFormService{
     getPrueba(){
         return 'Soy una string del servicio';
     }

}
// no necesito ningun modelo en este componente. voy a usar la del modelo users


