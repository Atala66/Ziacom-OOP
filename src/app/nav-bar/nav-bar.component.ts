import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public ziacomTitle: string;
  public homeLink:string;
  public usersLink:string;
  public contentLink:string;
  public nestingLink:string;
  public imagesLink:string;
  public videoLink:string;
  public pdfLink:string;

  constructor() {
    this.ziacomTitle = 'Ziacom';
    this.homeLink= 'Home';
    this.usersLink = 'Users';
    this.contentLink = 'Content';
    this.nestingLink = 'Nesting Components';
    this.imagesLink = 'Images';
    this.videoLink = 'Video';
    this.pdfLink = 'PDF';

   }

  ngOnInit() {
  }

}
