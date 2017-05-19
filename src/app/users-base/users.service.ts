
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
export class UsersService{
  //1- declaramos las urls a las que va a tirar el servicio.
private url = "http://jsonplaceholder.typicode.com/users";
// declaramos variables para recoger los datos que devuelve el servicio
 //private users;
 private user;
constructor(  
    // instanciamos una variable del objeto Http
    private http:Http
 ){
}
// 2- declaramos los métodos. EL CRUD
// dame todos los ususarios
getAllUsers(){
       // console.log('Soy el servicio get all Users');
    // el método http devuelve un objeto Observable
   return this.http.get(this.url)
    //despues mapea la respuesta y transformala en json
    .map(res => res.json());
    /*.subscribe(
        data => {this.users = data;},
        error => console.log(error),
        () => console.log('done')
     ); */
}
// dame un usuario por la id
getUserById(id:number){
    console.log(id);
    // devuelve esta url + llamada a funcion para capturar la id
    return this.http.get(this.getUserId(id))
    .map(res => res.json());
}
// añade un usuario
addUser(user){
    // devuelve el post con los params(esta url y el objeto JSON stringificado para el servicio)
    console.log(this.user);
    // cuidado! en JSON.stringify(user) --NO this.user
    return this.http.post(this.url, JSON.stringify(user))
    .map(res => res.json());
}

// elimina un usuario
deleteUser(id:number){
    // elimina al usuario con esta id
     console.log(id);
    return this.http.delete(this.getUserId(id))
       .map(res => res.json());   
}

// actualiza un usuario existente
updateUser(user){
    return this.http.put(this.getUserId(user.id),JSON.stringify(user))
    .map(res => res.json());    
}

// recoje cualquier id
// es un método privado. no se expone hacia fuera. solo va a ser utilizado 
// por los servicios 
private getUserId(id:number){
    return this.url + '/' + id;
}

}