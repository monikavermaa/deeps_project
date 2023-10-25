import { Component, OnInit } from '@angular/core';
import { SellerService } from '../Services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  
  constructor(private seller: SellerService, private router : Router) {

  }

  getFloatLabelValue(): import("@angular/material/form-field").FloatLabelType {
    throw new Error('Method not implemented.');
  }
  hide: any;
  hideRequiredControl: any;

  ngOnInit(): void {

  }
  signUp(data: signUp): void {
    this.seller.userSignUp(data)
    console.warn(data)
    this.seller.userSignUp(data).subscribe((result) => {
      console.warn(result)
      if(result){
        alert(" You are Successfully Signup....!")
        this.router.navigate(['seller-login'])
      }
    });
  }
       

  goToPage(pageName:string):void{ // button navigate the page 
    this.router.navigate(['seller-login'])

  }

}
