import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { product } from '../data-type';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchProduct: undefined | product[];
  menuType: string = 'default';
  sellerName: string = "";
  search: any;
  userName: any;
  cartItems = 0


  constructor(private service: ProductService, private route: Router) {

  }

  ngOnInit(): void {
    this.route.events.subscribe((data: any) => {
      console.warn(data.url)
      if (data.url) {
        if (localStorage.getItem('user') && data.url.includes('user')) {
          console.warn("in seller area")
        }
        else {
          console.warn("not in seller area")
        }
      }
    })
    let cartData = localStorage.getItem('localCart')
    if(cartData){
     this.cartItems =  JSON.parse(cartData).length
    }
    this.service.cartData.subscribe((items)=>{
      this.cartItems=items.length
    })
  }

  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['seller-login'])
  }

  serchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.service.searchProduct(element.value).subscribe((result) => {
        console.log(result);
        result.length = 3
        this.searchProduct = result
      })
      // console.warn(element.value)
    }
  }
  hideproduct() {
    this.searchProduct = undefined
  }
  searchInput(val: string) {
    console.warn(val)
    this.route.navigate([`user-search/${val}`])

  }
}
