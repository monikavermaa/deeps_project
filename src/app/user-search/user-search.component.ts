import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../Services/product.service';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit{
  productData: undefined | product[]
  constructor(private product:ProductService ,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    let query = this.route.snapshot.paramMap.get('query');
    console.warn(query);
    
    query && this.product.searchProduct(query).subscribe((result)=>{
      this.productData=result;
      
    })
    

}
}