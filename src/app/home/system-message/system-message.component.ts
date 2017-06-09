import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'system-message',
  templateUrl: './system-message.component.html',
  styleUrls: ['./system-message.component.css']
})
export class SystemMessageComponent implements OnInit {
   @Input() message:string;
   @Input() active:boolean;


  constructor() { }

  ngOnInit() {
  }

  show(){
   this.active = true;
  }

  hide(){
    this.active = false;
  }

}
