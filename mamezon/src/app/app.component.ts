import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mamezon';
  logo = "https://i.ibb.co/Ttz6HZ0/image.jpg";
  user = true;
  signRegister = false;
  userProfileName ;
  constructor(private router : Router){
    this.userProfileName = localStorage.getItem('profile_user');
    // console.log(this.userProfileName);

    if(this.userProfileName == null)
    {
      this.signRegister == false;
      this.user == true;
    }
    else
    {
      this.signRegister = true;
      this.user = false;
    }
  }

  logout()
{
  this.router.navigateByUrl('login').then(()=>{
    window.location.reload();
  });
}
}
