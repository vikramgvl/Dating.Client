import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any ={}
  loggedIn = false;
  constructor(private accountservice:AccountService){}

  ngOnInit(): void {
    console.log(this.loggedIn);
    //throw new Error('Method not implemented.');
  }
login(){
  this.accountservice.login(this.model).subscribe({
    next:response=>{
      console.log(response);
      this.loggedIn = true;
    },
    error:error =>console.log(error)
    
  })
  
}
logout(){
  this.loggedIn = false;
}
}
