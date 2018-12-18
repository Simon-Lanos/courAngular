import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:[];
  search:any;

  constructor(private productService:ProductService) {
    //this.products = productService.list();
    this.search = {};
    productService.list().subscribe( products => {
      this.products = products;
    });
  }

  delete(product) {
    this.productService.delete(product.id).subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
