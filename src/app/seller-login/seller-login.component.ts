import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SellerService } from '../Services/seller.service';
@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
hide: any;
showLogin: any;
constructor(private router: Router ,private seller: SellerService){

}
goToPage(pageName:string):void{
  this.router.navigate(['seller-auth'])

}
Login(data: any): void {
  // console.warn(data)
  this.seller.userLogin(data)
  localStorage.setItem('session',JSON.stringify(data))
  
  // this.seller.userSignUp(data).subscribe((result) => {
  //   console.warn(result)
  //   if(result){
  //     alert(" You are Successfully Signup....!")
  //     this.router.navigate(['seller-login'])
  //   }
  // });
}
}
