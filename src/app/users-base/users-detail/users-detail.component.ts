import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// importamos modelo básico de usuarios 
import { UsersBasicModel } from '../users-base.model';
// importamos modelo complejo de usuarios 
import { UserOtherModel } from '../users-base.model';
// importamos servicio
import { UsersService } from '../users.service';


@Component({
  selector: 'users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
  providers: [UsersService]
})
export class UsersDetailComponent implements OnInit {
  public Iam: string = ' Soy el detail component';
  public dataDetail: string;
  public user: string;

  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute,
    //instanciamos un objeto servicio
    private _userService: UsersService


  ) { }

  ngOnInit() {
  }



  getSingleUser(id: number) {
    this._userService.getUserById(id).subscribe(
      data => { this.user = data },
      error => console.log(error),
      () => console.log('Llamada terminada'));
  }

}
