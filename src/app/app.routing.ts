// MODULO DE ENRUTAMIENTO
// 1-importamos los modulos de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importamos los componentes a enrutar
import {UsersBaseComponent} from './users-base/users-base.component';
import {UsersFormComponent} from './users-base/users-form/users-form.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';


// asignamos el objeto routes a una constante
const appRoutes:Routes =[
    //home
    { path: '', component:HomeComponent},
    // get single user
    // {path:'users/:id', component:UsersBaseComponent},
     // post new user
   {path:'users/newUser', component:UsersFormComponent},
      //users
    {path:'users', component:UsersBaseComponent},
    // error 404
    {path: '**', component:NotFoundComponent}

]
// repasar esto
export const appRoutingProviders: Array<any> = [];
// 4- HACEMOS LA MAGIA: 
// recordar que también existe un método forChild(enrutado de submódulos);
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// 5 -EXPORTAMOS Y REPRESENTAMOS EL MODULO DEL ROUTING SOBRE HTML EN EL COMPONENTE RAIZ .html