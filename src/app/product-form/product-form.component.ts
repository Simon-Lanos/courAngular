import { Component, OnInit } from '@angular/core';
import { Product } from "../classes/product";
import { ProductService } from "../product.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  product:Product;
  constructor(
      private productService:ProductService,
      private activeRoute:ActivatedRoute) {
    this.product = new Product();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe( (param) => {
      this.productService.get(param.id).subscribe(product => {
        this.product = product;
      });
    });
  }

  save() {
    if(this.product.id) {
      this.productService.update(this.product)
      .subscribe(result => {
        console.log(result);
      });
    }else {
      this.productService.create(this.product)
      .subscribe(result => {
        //console.log(result);
      });
    }
  }

}
