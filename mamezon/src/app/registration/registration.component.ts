import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public user! : User;
  public users : User[]=[{
      "name" : "temp",
      "email" :"temp",
      "password" : "temp",
      "terms" : false
    }]

    constructor(private router : Router){}

  ngOnInit(){
    this.user = new User({
      name :"",email:"",password:"",terms : false
    });
  }

  submitDetails(){
    this.users.push(this.user);
    localStorage.setItem('users_data',JSON.stringify(this.users));
    alert("Your are register with Us \nClick ok To Login");
    this.router.navigateByUrl('login');
  }

}
