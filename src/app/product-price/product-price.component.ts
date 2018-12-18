import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../classes/product';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent implements OnInit {

  @Input() price:number;
  @Input() symbol:string = "e";
  //@Input() product:Product;

  constructor() { }

  ngOnInit() {
  }

}
