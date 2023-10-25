import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{
  popularProducts:undefined|product[];
  trendyProducts:undefined | product[];
   constructor(private product:ProductService) {}
 
   ngOnInit(): void {
     this.product.trendyProducts().subscribe((data)=>{
       this.trendyProducts=data;
     })
   }
}
