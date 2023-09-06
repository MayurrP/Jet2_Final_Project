import { Component } from '@angular/core';

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
  constructor(){
    this.userProfileName = localStorage.getItem('profile_user');
    console.log(this.userProfileName);

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
}
