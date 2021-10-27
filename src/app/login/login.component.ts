import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myname:any;

  mypass:any;
 
   constructor() { }
 
 
 
 
 
   register(Username:any,Password:any){
 
  
 
   this.myname=  localStorage.getItem("Username");
 
   this.mypass=  localStorage.getItem("Password");
 
 
 
     if((this.myname==Username)&&(this.mypass==Password) ){
 
 
 
       alert("logged in")
 
 
 
     }else{
 
       alert("sry")
 
     }
 
   }

  ngOnInit(): void {
  }

}
