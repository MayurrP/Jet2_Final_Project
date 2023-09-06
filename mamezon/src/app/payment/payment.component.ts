import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallsService } from '../apicalls.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  banklist! : any[];

  isFun = false;
  isFunA = true;
  isFunB = true;

  //  cards Payment
  cardForm! : FormGroup;
  cards = {
    cardNumber : '',
    expDate : '',
    cvvNum : '',
    cardHolder : ''
  };

  cardSubmitted = false;

    //Internet Payment
     netBankForm ! : FormGroup;
     netbanks = {
      netBankName:''
     }

     netBankSubmitted = false;

     //upi
     upiForm! : FormGroup;
     upiPay = {
      upi:''
     }

     upiSubmitted = false;

constructor(private router : Router,private service : ApicallsService){
 
  this.service.getbanks().subscribe((data : any[])=>{
    this.banklist = data;
    console.log(this.banklist)
  });
  this.createCardForm();
  this.createNetBaankForm();
  this.createUpiForm();
}

//cards
createCardForm(): void {
  this.cardForm = new FormGroup({
  'cardNumber': new FormControl(this.cards.cardNumber, [
  Validators.required  ]),
  'expDate': new FormControl(this.cards.expDate, [
  Validators.required,
  Validators.minLength(3)
  ]),
  'cvvNum': new FormControl(this.cards.cvvNum, [
    Validators.required]
   ),
  'cardHolder': new FormControl(this.cards.cvvNum,Validators.required),
});
  }
//netBank
createNetBaankForm(): void {
    this.netBankForm = new FormGroup({
    'netBankName': new FormControl(this.netbanks.netBankName, [
    Validators.required])
  });
    }

  //createUpiForm

  createUpiForm():void{
    this.upiForm = new FormGroup({
      'upi': new FormControl(this.upiPay.upi,[
        Validators.required,
        Validators.email
      ])
    });
  }
  
onUpiPayDetails()
{
  if(this.upiForm.invalid)
  {
    alert("Enter Upi ID");
  }
  else{
  this.upiSubmitted = true;
  localStorage.removeItem('cart_data');
  alert("Order Placed Successfully");
  this.router.navigateByUrl('/ordersuccess');
  }
}

onCardDetails(): void {
  if(this.cardForm.invalid)
  {
    alert("Enter Card Details");
  }
  else{
  this.cardSubmitted = true;
  localStorage.removeItem('cart_data');
  alert("Order Placed Successfully");
  this.router.navigateByUrl('/ordersuccess');
}
  }

  onNetBankSubmit(): void {
    this.netBankSubmitted = true;
    localStorage.removeItem('cart_data');
    alert("Order Placed Successfully");
    this.router.navigateByUrl('/ordersuccess');
  
    }
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
