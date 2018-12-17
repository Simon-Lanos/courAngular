import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:[];
  constructor(private http:HttpClient) {
    this.products = [
      {
        id:1,
        name: "Product 1",
        price:500,
        image: "http://placehold.it/100/110"
      },
      {
        id:2,
        name: "Product 2",
        price:200,
        image: "http://placehold.it/100/110"
      }
    ];
  }

  list() {
    return this.http.get("/assets/products.json");
  }

  get(id) {
    for(let product of this.products) {
      console.log(product);
      if(product.id == id) {
        return of(product);
      }
    }
    return of({});
  }

}
