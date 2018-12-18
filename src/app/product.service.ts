import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from "./classes/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  //products: Array<Product>;

  constructor(private http:HttpClient) {
  }

  create(datas) {
    return this.http
    .post("http://localhost:3000/products", datas)
    .pipe(
      catchError( error => console.log(error))
    );
  }

  delete(id) {
    return this.http.delete("http://localhost:3000/products/" + id);
  }

  update(product) {
    return this.http.put("http://localhost:3000/products/" + product.id, product);
  }

  handleError(error) {
    console.log(error);
  }

  list(){
    return this.http.get("http://localhost:3000/products/");
  }

  get(id) {
    return this.http.get("http://localhost:3000/products/" + id);
  }

}
