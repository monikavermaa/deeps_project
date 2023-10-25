import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
productList:undefined | product[]

   constructor(private product:ProductService){

   }
   ngOnInit(): void {
    
    this.product.productList().subscribe((result)=>{ // for fetching products 
       console.warn(result)
       this.productList=result;
    })
  
   }
  getProduct() {
    throw new Error('Method not implemented.');
  }
   onDeleteProduct(id:number){ // for delete the products..

    if (confirm('Are you sure you want to delete this product ')) {
     
    this.product.deleteproduct(id).subscribe((result)=>{
      console.warn(result)
    })
    
    }  
    // alert(" Your Product is deleted..........")
  
   }
}
