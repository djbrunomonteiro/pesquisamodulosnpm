import { from, Observable } from 'rxjs';
import { Product } from './../../components/product/product.model';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

 
  panelOpenState = false;
  lists?: Product[];
  
  value: string = "Brasil";
  loading: boolean = false;

 @Input() valueIn?: string ;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {}


  search(){
    this.loading = true;
  
   this.productService.getModulesBr(this.value)
   .subscribe(prods => {
     this.lists = prods.list
     this.loading = false;
    }, err => {
      console.log(err)
      this.loading = false
    }
  
   )
    

  }


 
}
