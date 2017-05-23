import { Component, OnInit } from '@angular/core';
// modulos para trabajar con el router y parámetros de la url
//recojemos params para inyectar rutas recojer paramUrls, etc.
// lo tenemos que inicializar en el constructor
import { Router, ActivatedRoute, Params } from '@angular/router';
// importamos modelo básico de usuarios 
import { UsersBasicModel } from './users-base.model';
// importamos modelo complejo de usuarios 
import { UserOtherModel } from './users-base.model';
// importamos servicio
import { UsersService } from './users.service';


@Component({
  moduleId: module.id,
  selector: 'users-base',
  templateUrl: './users-base.component.html',
  styleUrls: ['./users-base.component.css'],
  providers: [UsersService] // proveedor de servicos
})
export class UsersBaseComponent implements OnInit {
  // asignamos el modelo usuario a una propiedad de la clase
  public basic_user: UsersBasicModel;
  public other_user: UserOtherModel;
  //propiedad para recoger los parámetros
  public paramUrl;
  // propiedad para recoger a un usuario en  getSingleUser()
  public user;
  // instanciamos un array de todos mis usuarios
  private users: UserOtherModel[] = [];
  //propiedad para recoger a todos los usuarios en getAllUsers()
  public getUsers;
  public firstUser;
  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute,
    //instanciamos un objeto servicio
    private _userService: UsersService
  ) {
    // inicializamos un nuevo usuario.
    //this.basic_user = new UsersBasicModel(1,'Admin','Lucy','lucy@gmail.com','1234');
    //  this.basic_user = new UsersBasicModel(3,'Admin','Lucy','lucy@gmail.com','1234');
    this.firstUser = new UserOtherModel();
    /*  this.firstUser.setId = 1; */
    this.firstUser.setLogin = "Admin";
    this.firstUser.setNombre = "hola";
    this.firstUser.setProfile = "premium";
    this.firstUser.setEmail = 'email@gmail.com';
    this.firstUser.setPassword = 12345;
    this.firstUser.setPrivateData = ['hello', 'I am ', 'the private data'];
    /*this.firstUser.setEmail("email"); */
    // console.log(this.firstUser);
    //this.other_user = new UserOtherModel(2,'Admin2', 'Marc', 'marc@gmail.com', '321,', 'other', 'other');
  }

  ngOnInit() {
    // metodos a inicializar nada más cargar el componente
    // le paso el array de params
    // importante!! no podemos usar una funcion cb normal!!
    // necesitamos una funcion flecha para poder acceder al scope de vgar paramURL que
    //está en la clase
    this._activateRouter.params.forEach((params: Params) => {
      this.paramUrl = params['id'];
      console.log(params);
    });


    this._userService.getAllUsers().subscribe(
      data => { this.getUsers = data },
      error => console.log(error),
      () => console.log('done')
    );
  }

  // dame un usuario por la id
  getSingleUser(id: number) {
    this._userService.getUserById(id).subscribe(
      data => { this.user = data },
      error => console.log(error),
      () => console.log('Llamada terminada'));
  }
  
  // actualizar usuario
  updateUser(user){
    var getUser = this._userService.getUserById(user.id);
     console.log(getUser);
     if(user.id){
       var updateUser = this._userService.updateUser(user).subscribe(
         data => {this.user = data},
         error => console.log('Error actualizando el usuario ' + error)
       );
       console.log(updateUser);
     }

  }
  // eliminar un usuario
  deleteUser(user) {
    var deleteConfirm = confirm('Are you sure you wan´t to delete user with name ' + user.name + 
    ' and id ' + user.id + '??');
    if (deleteConfirm) {
      // localizamos el indice
      var index = this.users.indexOf(user);
      // sobre array de usuarios, método splice
      this.users.splice(index, 1);
      // llamada al servicio
      var result = this._userService.deleteUser(user.id);
      // por qué null???
      result.subscribe(null,
        error => console.log(error),
        () => console.log('Llamada terminada. Usuario eliminado'));
    }
  }

  navigateToForm() {
    this._router.navigate(['/users/newUser']);

  }

}
