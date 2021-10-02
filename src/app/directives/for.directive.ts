import { Product } from './../components/product/product.model';
import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit{

  @Input('appForIn') products: object | undefined

  constructor() { }

  ngOnInit(): void{
    console.log(this.products);
 
  }

}
