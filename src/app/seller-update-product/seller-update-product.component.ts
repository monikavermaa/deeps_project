import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { product } from '../data-type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product
  constructor(private route: ActivatedRoute, private product: ProductService,private routee:Router) {

  }
  ngOnInit(): void { // get id in url for updating product's details
    let productId = this.route.snapshot.paramMap.get('id') // written this logic in ngonit and ngonit is called only when the component loads
    //paraMap is mthd of ActivatedRoute
    console.warn(productId)
    productId && this.product.getProduct(productId).subscribe((result) => {
      console.log(result)
      this.productData = result
    })
  }
  submit(data:product){
    console.warn(data)
    if(this.productData){
      data.id = this.productData.id
    }
    this.product.updateProduct(data).subscribe((result)=>{
         if(result){
          alert("product updated........")
         }
         this.routee.navigate(['seller-home'])
    })
  }
}
