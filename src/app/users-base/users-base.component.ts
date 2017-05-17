import { Component, OnInit } from '@angular/core';
// modulos para trabajar con el router y parámetros de la url
//recojemos params para inyectar rutas recojer paramUrls, etc.
// lo tenemos que inicializar en el constructor
import  { Router, ActivatedRoute, Params } from '@angular/router';
// importamos modelo básico de usuarios 
import {UsersBasicModel} from './users-base.model';
// importamos modelo complejo de usuarios 
import {UserOtherModel} from './users-base.model';
// importamos servicio
import {UsersService} from './users.service';


@Component({
  moduleId: module.id,
  selector: 'users-base',
  templateUrl: './users-base.component.html',
  styleUrls: ['./users-base.component.css'],
  providers:[UsersService] // proveedor de servicos
})
export class UsersBaseComponent implements OnInit {
  // asignamos el modelo usuario a una propiedad de la clase
 public basic_user:UsersBasicModel;
 public other_user:UserOtherModel;
 //propiedad para recoger los parámetros
 public paramUrl;
 // propiedad para recoger la id
 //public id;

//private users;
 //propiedad para recoger a los usuarios
public getUsers;
// prop para ecoger un solo usuario
public getUser;

  constructor(
       private _router: Router,
       private _activateRouter: ActivatedRoute,
       //instanciamos un objeto servicio
       private _userService: UsersService
  ) {
    // inicializamos un nuevo usuario.
       this.basic_user = new UsersBasicModel(1,'Admin','Lucy','lucy@gmail.com','1234');
         this.basic_user = new UsersBasicModel(3,'Admin','Lucy','lucy@gmail.com','1234');
       this. other_user = new UserOtherModel(2,'Admin2', 'Marc', 'marc@gmail.com', '321,', 'other', 'other');
   }

  ngOnInit() {
  // metodos a inicializar nada más cargar el componente
// le paso el array de params
// importante!! no podemos usar una funcion cb normal!!
// necesitamos una funcion flecha para poder acceder al scope de vgar paramURL que
//está en la clase
this._activateRouter.params.forEach((params:Params) =>{
      this.paramUrl = params['id'];
      console.log(params);
});
    console.log(this.basic_user);
    console.log(this.other_user);
  }

// métodos fuera del onInit
//utilizamos el servicio -----> this.varServicio.metodo 

// dame todos los usuarios
 getAllUsers(){
  this._userService.getAllUsers().subscribe(
    data => {this.getUsers = data},
    error => console.log(error),
    () => console.log('done')
    );
 } 
// dame un usuario por la id
 getSingleUser(id:number){
  this._userService.getUserById(id).subscribe(
    data => {this.getUser = data},
    error => console.log(error),
    () => console.log('Llamada terminada'));
   // this. _router.navigate(['/users', 'id']);
 }

 deleteUser(){
   this._userService.deleteUser(2);
 }


 
}
