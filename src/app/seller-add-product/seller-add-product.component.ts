import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage:string|undefined;
  constructor(private service:ProductService){

  }

  addProduct(data:product){
    console.warn(data)
    this.service.addProduct(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.addProductMessage="Product is successfully added!......"
      }
      setTimeout(()=>this.addProductMessage=undefined,5000)
    })
  }
}
