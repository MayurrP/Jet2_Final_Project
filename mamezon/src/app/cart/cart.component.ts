import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product = "";
  allproducts! : Product[];
  total : number = 0;
  emptycart = "https://bwmachinery.com.au/wp-content/uploads/2019/07/your-cart-is-empty-300x300.png";
  // cartvalue = true;
  // cartlistvalue = false;
  constructor(private router : Router){}

  ngOnInit(){
  this.product = localStorage.getItem('cart_data') as string;
  this.allproducts = JSON.parse(this.product);
  console.log(this.allproducts);
  
  this.allproducts.forEach(element => {
    this.total += element.price;
  });
  console.log("Total : "+this.total);

  localStorage.setItem('cart_list',JSON.stringify(this.allproducts));

  // if(this.total == 0)
  // {
  //   this.cartvalue = true;
  //   this.cartlistvalue = false;
  // }
  // else{
  //   this.cartvalue = false;
  //   this.cartlistvalue = true;
  // }
}

payment()
{
  this.router.navigateByUrl('payment');
}
back()
{
  this.router.navigateByUrl('product');

}

}
