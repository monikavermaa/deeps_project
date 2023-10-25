import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  cartData = new EventEmitter<product[] | []>();

  popularProducts() {
    throw new Error('Method not implemented.');
  }
  splice: any;

  constructor(private http: HttpClient) { }
  addProduct(data: product) {
    console.warn("Service called...........")
    return this.http.post("http://localhost:3000/products", data);
  }
  productList() { // for getting data in product listt 
    return this.http.get<product[]>("http://localhost:3000/products")
  }
  deleteproduct(id: number) { // deleting product
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProduct(id: string) { // this product id is used for prefilled form in product update form
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product: product) {
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`, product)
  }
  trendyProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=8');
  }
  searchProduct(query: string) {
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }
  localAddToCart(data: product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    }
    else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData)
  }

  removeItemFromCart(productId: number) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: product[] = JSON.parse(cartData)
      items = items.filter((items: product) => productId !== items.id)
      // console.warn(items)
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items)
    }
  }

  currentCart(){
    let userStore= localStorage.getItem('user')
    let userData = userStore && JSON.parse(userStore)
    return this.http.get<product[]>("http://localhost:3000/products")
  }



}