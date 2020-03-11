import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
temp;
newtemp;
user;

deleted(value){
  console.log(value);
  this.newtemp = this.temp.filter(item => item !== value)

  

    // this.temp.pop(value);
     localStorage.setItem('user', JSON.stringify(this.newtemp));
this.temp=this.newtemp;

}





  constructor() { 
   let val= localStorage.getItem("user");
    this.temp=JSON.parse(val);
    this.user=this.temp[this.temp.length-1].email;
   console.log(this.temp)
 


  
  }

  ngOnInit() {
  }

}
