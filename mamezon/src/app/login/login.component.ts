import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = "";
  username = "";
  allUsers! : User[];
  flag = false;
  "loginForm" : FormGroup;
  isSubmitted = false;

  constructor(private router : Router, private formBuilder : FormBuilder, private service : AuthService){}

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    });
    localStorage.removeItem('profile_user');
    this.user = localStorage.getItem('users_data') as string;
    this.allUsers = JSON.parse(this.user);
  }

  get formControls()
  {
    return this.loginForm.controls;
  }

  login()
  {
    console.log(this.loginForm.value);
    console.log("login "+this.user);
    this.isSubmitted = true;
    if(this.loginForm.invalid)
    {
      return;
    }
    this.allUsers.forEach(data =>{
      if(this.loginForm.value.email == data.email && this.loginForm.value.password == data.password)
      {
        this.flag = true;
        this.username = data.name;
        localStorage.setItem('profile_user',this.username as string);
        this.router.navigateByUrl('product').then(()=>{
          window.location.reload();
        })
      }
    })
    if(this.flag == false){
      alert("Invalid email or Password");
    }
  } 

}
