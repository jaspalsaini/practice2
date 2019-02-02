import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  
  public loginerror:string;
  constructor() { }

  ngOnInit() {
    this.loginerror = 'Please provide valid username and password';
  }

}
