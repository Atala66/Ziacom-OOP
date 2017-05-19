import { Component, OnInit } from '@angular/core';
//importamos módulos de formulario
// FormGroup representa un set de controles de formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// importamos módulos de ruta
import { Router, ActivatedRoute, Params } from '@angular/router';
// importamos modelo de datos de users-base
import { UserOtherModel} from '../../users-base/users-base.model';
// importamos servicio
import { UsersService} from '../../users-base/users.service';
// importamos el servcio propio
import { UserFormService} from './users-form.service';
@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
  providers: [UserFormService, UsersService]
  
})
export class UsersFormComponent implements OnInit {
      title:string;
     // instanciamos un grupo de formulario
     // en esta variable recogeremos los datos del formulario
      form: FormGroup;
      // instanciamos un nuevo usuario basado en el modelo de UserOtherModel
      user: UserOtherModel = new UserOtherModel();
      public paramUrl;
  
  constructor(
    //instanciamos variables de servicio y rutas
       private formBuilder: FormBuilder,
       private _router: Router,
       private _activeRouter: ActivatedRoute,
      private _userForm: UserFormService,
       private _userService: UsersService
  ) {
     // inicializamos el constructor del formulario en la variable form
     // form builder.group() inicializa inistancias de form group y form controls
     // parametros: 1- valor/ 2- validador sincrono /3- validador asíncrono
       this.form = formBuilder.group({
        login: ['', Validators.required],
        nombre: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
          }); 

     this.title = 'New User';
   }

 ngOnInit() {
    this._activeRouter.params.forEach((params: Params) => {
      this.paramUrl = params['id'];
      console.log(params);
    });
  } 
    saveUser() {
      //variable para recoger el resultado
    var result = null;
    if(this.form.valid){
      // variable para recoger el valor de lo recogido en el formulario
    var userValue = this.form.value;
    console.log(userValue);
    // llamada al servicio
    result = this._userService.addUser(userValue);
    // manipula el resultado
    result.subscribe(
      data => this._router.navigate(['users']),
      error => console.log(error),
      () => console.log('Llamada finalizada. Usuario guardado'));
    //  return result;
  }
    }


}
