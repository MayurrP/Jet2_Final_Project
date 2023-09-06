import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallsService } from '../apicalls.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products! : any[];
  searchData = "";
  count = 0;

  pay_cart_product = "";
  pay_allproducts! : Product[];

  public carts! : Product;
  cartlist : Product[]=[{
    "title":"",
    "price":0,
    "image":""
  }];

  constructor(private service:ApicallsService,private router:Router){
  }
  ngOnInit()
  {
    this.service.getdata().subscribe((data : any[])=>{
      this.products = data;
      // console.log(this.products);
    });
    this.carts = new Product(
      {
        title : "",price:0,image:""
      });
      this.cartlist.pop();

      this.pay_cart_product = localStorage.getItem('cart_list') as string;
      this.pay_allproducts = JSON.parse(this.pay_cart_product);
      console.log(this.pay_allproducts);
      if(this.pay_allproducts === null){}
        else{
        this.pay_allproducts.forEach(data =>{
          this.cartlist.push(data);
          console.log(data);
        });
      }
  }


  // constructor(private http : HttpClient){

  //   //Http get
  //   this.http.get('https://fakestoreapi.com/products').subscribe(data=>{
  //   this.products = data;
  // },
  // err =>{
  //   console.log("Error Occured.");
    
  // });
  // }

  addToCart(prod : Product)
  {
    if(this.cartlist === null){ this.cartlist=[];}
    this.cartlist.push(prod);
    this.count++;
    alert(prod.title+" added to cart");
    localStorage.setItem('cart_data',JSON.stringify(this.cartlist));
  }

  search()
  {
    // this.products = [];
    // console.log(this.products);
    console.log("search "+this.searchData);
    this.service.getSearch(this.searchData).subscribe((data : any[])=>{
      this.products = data;
      console.log(this.products);
    });
  }

  moveToCart(){
    console.log(this.count);
    if(this.count == 0)
    {
      alert("Cart is Empty");
    }
    else{
    this.router.navigateByUrl('cart');
  }
  }

}
