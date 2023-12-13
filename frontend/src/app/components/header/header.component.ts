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
  signInButton=true;
  signUpButton=false;
  searchBox=false;

  searchButtonDisplay: boolean = true;

  constructor() { 
  }

  ngOnInit(): void {
  }  

  toggleSearchBox(): void{
    this.searchBox = !this.searchBox;
    this.searchButtonDisplay = !this.searchButtonDisplay;
  }
  
  toggleButton(): void{
    this.navButton = !this.navButton;
  }

  toggleUser():void{
    console.log('User Button Clicked');
    this.userButton=!this.userButton;
  }

  toggleSignIn():void{
    if (!this.signInButton) {
      this.signInButton=!this.signInButton;
      this.signUpButton=!this.signUpButton;
    }
  }

  toggleSignUp():void{
    if (!this.signUpButton) {
      this.signUpButton=!this.signUpButton;
      this.signInButton=!this.signInButton;
    }
  }

}
