import { Component, OnInit } from '@angular/core';
import { DropDownAnimation } from 'src/app/animation';
import {userMenuAnimation} from 'src/app/animation/userMenuAnimation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [DropDownAnimation,userMenuAnimation]
})
export class HeaderComponent implements OnInit {
  navButton = false;
  userButton=false;

  constructor() { 
  }

  ngOnInit(): void {
  }  
  
  toggleButton(): void{
    this.navButton = !this.navButton;
  }

  toggleUser():void{
    console.log('User Button Clicked');
    this.userButton=!this.userButton;
  }
}
