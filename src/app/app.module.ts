import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import de boostrap. de momento no está funcionando - arrancamos con cdn
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// importamos el módulo de rutas
import {routing , appRoutingProviders } from './app.routing';
// importamos el módulo interno de enrutado de usuarios
import {usersRouting } from './users-base/users.routing'
// componentes propios
import { UsersBaseComponent } from './users-base/users-base.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersFormComponent } from './users-base/users-form/users-form.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { UsersDetailComponent } from './users-base/users-detail/users-detail.component';
import { ParentComponentComponent } from './home/parent-component/parent-component.component';
import { ChildComponentComponent } from './home/child-component/child-component.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersBaseComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    UsersFormComponent,
    SideMenuComponent,
    UsersDetailComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    usersRouting, //nested routing user´s CRUD
    routing, // main routing
    BrowserModule,
    ReactiveFormsModule /* xa que funcionen los formularios 
                          OJO!! si le pasamos solo FormsModule peta*/                        
  ],

  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
