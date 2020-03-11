import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:HttpClient,private router:Router) {
    let log=true;
   }

  loginData(form: NgForm) {
  





    let val= localStorage.getItem("user");
    if(val===null){
      var users=new Array();  
    users.push(form.value);
      localStorage.setItem('user', JSON.stringify(users));
    }
    else{
      var temp=JSON.parse(val);
      temp.push(form.value);
      localStorage.setItem('user', JSON.stringify(temp));
    }
   


    // for(let ele of temp){
    //   console.log(ele);
    // }
   
    this.router.navigate([`/home`]);
// this.service.post<any>(`http://localhost:8080/demo/login`, form.value).subscribe((data)=>{
//   localStorage.setItem('user', JSON.stringify(data));

//   console.log(data);

// },(err)=>{console.log(err)});
    

  }



    
  ngOnInit() {
  }

}
