import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import de boostrap. de momento no está funcionando - arrancamos con cdn
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// importamos el módulo de rutas
import {routing , appRoutingProviders } from './app.routing';
// componentes propios
import { UsersBaseComponent } from './users-base/users-base.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersFormComponent } from './users-base/users-form/users-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersBaseComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    UsersFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing,
    BrowserModule,
    ReactiveFormsModule /* xa que funcionen los formularios 
                          OJO!! si le pasamos solo FormsModule peta*/
                         
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
