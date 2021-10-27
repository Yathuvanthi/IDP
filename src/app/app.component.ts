import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  
  mydata="";
  
  principle:any;
  month:any;
  rate:any;
  rateOfIntrest=5;
  select(myval1:any){

 

    console.log(this.rateOfIntrest)

     

      this.rateOfIntrest=myval1;

      console.log(this.rateOfIntrest)

   

  }



  cal(principle:any,month:any,rate:any){

    this.principle=principle;

    this.month=month;

    this.rate=rate;

    var a=this.principle*this.month*this.rate;

    var b=a/100;

    console.log(b)

  }
  
}
