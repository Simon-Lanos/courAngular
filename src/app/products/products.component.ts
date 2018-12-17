import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:[];

  constructor(private productService:ProductService) {
    //this.products = productService.list();

    productService.list().subscribe( products => {
      this.products = products;
    });
  }

  ngOnInit() {
  }

}
