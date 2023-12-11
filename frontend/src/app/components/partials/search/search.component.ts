import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute,
              private router:Router) { 
                activatedRoute.params.subscribe((params) =>{
                  if(params.searchTerm) this.searchTerm = params.searchTerm;
                });
              }

  ngOnInit(): void {
  }

  search(term:string):void{
    if(term)
<<<<<<< HEAD
    this.router.navigateByUrl('/search/' + term);
=======
    this.router.navigateByUrl('/collections/' + term);
>>>>>>> 7aed939c6d46de7d07aeb09f43aead3da154b55e
  }

}
