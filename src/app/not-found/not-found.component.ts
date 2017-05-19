import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
    public errorMessage: string;



  constructor() {
       this.errorMessage = 'Serás redirigirido a esta páginas cada vez que la URL esté mal formada. Ja Ja Ja!!!';

   }

  ngOnInit() {
  }

}
