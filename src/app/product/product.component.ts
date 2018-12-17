import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products:[];
  product:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private router:Router,
    private productService:ProductService
   ) {
     this.product = {};
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) =>{
      this.productService.get(params.id).subscribe(product => {
        this.product = product;
      });
      //this.product = this.productService.get(params.id);
    });
  }

  back() {
    this.router.navigate(["products"]);
  }

}
