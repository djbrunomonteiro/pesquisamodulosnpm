import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 

  constructor( private http: HttpClient) {
  
   }

  getModulesBr(value: string): Observable<Product>{

    return  this.http.get<Product>(`https://npm.io/api/v1/search?query={${value}}&keyword:portuguese`)

  }


}
