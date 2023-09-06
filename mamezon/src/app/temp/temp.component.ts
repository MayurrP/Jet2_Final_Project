import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {

  isFun = true;
  isFunA = false;
  isFunB = true;
  doFun(){
    this.isFunA = true;
    this.isFunB = true;
    this.isFun= false;
  }
  doFunA(){
    this.isFun= true;
    this.isFunB= true;
    this.isFunA= false;
  }
  doFunB(){
    this.isFun= true;
    this.isFunA= true;
    this.isFunB= false;
  }
}
