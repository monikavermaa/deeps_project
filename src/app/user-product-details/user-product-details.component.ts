import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../Services/product.service';
@Component({
  selector: 'app-user-product-details',
  templateUrl: './user-product-details.component.html',
  styleUrls: ['./user-product-details.component.css']
})

export class UserProductDetailsComponent implements OnInit {

  productData:undefined | product;
  productQuantity:number=1;
  removeCart=false;
  cartData:product|undefined;
  constructor(private route: ActivatedRoute, private product: ProductService) {
  
  }


  handleQuantity(val: string) {
    if (this.productQuantity < 10 && val === 'plus') {
      this.productQuantity += 1
    }
    else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1
    }
  }

  

  // addToCart() {
  //   if (this.productData) {
  //     this.productData.quantity = this.productQuantity
  //     if (!localStorage.getItem('user')) {
  //       this.product.localAddToCart(this.productData)
  //     }
  //   }
  // }
  addToCart(){
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.product.localAddToCart(this.productData);
        this.removeCart=true
      }
    } 
  }
  removeToCart(productId:number) {
    this.product.removeItemFromCart(productId)
    this.removeCart=false

  }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((result) => {
      this.productData = result;
    })

    let cartData = localStorage.getItem('localCart')
    if(productId && cartData){
      let items = JSON.parse(cartData);
      items = items.filter((items:product)=>productId == items.id.toString())                 //filter ia used to pick a value of array's keys
      if(items.length){
        this.removeCart = true;
      }
      else{
        this.removeCart = false;
      }
    }
  }




}
