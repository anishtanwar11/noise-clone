import { Component, OnInit } from '@angular/core';
import { DropDownAnimation } from 'src/app/animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [DropDownAnimation]
})
export class HeaderComponent implements OnInit {
  navButton = false;

  constructor() { 
  }

  ngOnInit(): void {
  }  
  
  toggleButton(): void{
    this.navButton = !this.navButton;
  }
}
