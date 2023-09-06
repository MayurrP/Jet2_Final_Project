import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  products : any;
  apiUrl = "http://localhost:5093/api/Products"; 
  bankApiUrl = "http://localhost:5093/api/Banks";
  searchApi = "http://localhost:5093/api/Products/";
  
  constructor(private http : HttpClient) {
    
    // this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(data=>{
    //   this.products = data;
    //   console.log(this.products);
    // },
    // err =>{
    //   console.log("Error Occured.");
      
    // });
   }

  getdata(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getbanks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.bankApiUrl}`);
  }
  
  getSearch(findProduct : string): Observable<any[]> {
    return this.http.get<any[]>(`${this.searchApi}`+findProduct);
  }
}
