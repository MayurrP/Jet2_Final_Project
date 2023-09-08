import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  
  user = "";
  username! : any ;
  email ="";
  custname = "";
  allUsers! : User[];


  constructor(private router : Router)
  {
    this.user = localStorage.getItem('users_data') as string;
    this.allUsers = JSON.parse(this.user);
    this.username =localStorage.getItem('profile_user');

    this.allUsers.forEach(data =>{
      if(this.username === data.name)
      {
        this.custname = data.name;
        this.email = data.email;
      }
    })
  }



logout()
{
  this.router.navigateByUrl('login').then(()=>{
    window.location.reload();
  });
}
}
