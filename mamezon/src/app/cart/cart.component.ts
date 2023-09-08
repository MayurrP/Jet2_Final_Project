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
  emptycart="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif";
  // emptycart = "https://bwmachinery.com.au/wp-content/uploads/2019/07/your-cart-is-empty-300x300.png";
  cartvalue = true;
  cartlistvalue = false;
  constructor(private router : Router){}

  ngOnInit(){
  this.product = localStorage.getItem('cart_data') as string;
  this.allproducts = JSON.parse(this.product);
  console.log(this.allproducts);
  if(this.allproducts === null)
  {
    this.cartvalue = false;
    this.cartlistvalue = true;
  }
  else{
    this.cartvalue = true;
    this.cartlistvalue = false;
  }
  this.allproducts.forEach(element => {
    this.total += element.price;
  });
  console.log("Total : "+this.total);

  localStorage.setItem('cart_list',JSON.stringify(this.allproducts));

}

deleteItem(){
  alert("Item Deleted");
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
