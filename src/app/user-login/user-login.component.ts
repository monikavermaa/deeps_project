import { Component } from '@angular/core';
import { Router }  from '@angular/router'
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
authError : string | undefined;
constructor(private route : Router,private service:UserService){

}

goToPage(pageName: string):void {
 this.route.navigate(['user-auth'])
}
Login(data: any) {
 this.service.Signin(data);
 this.service.isValidUser.subscribe((result)=>{
      console.log("dwijesh",result)
      if(result){
        this.authError="Please enter valid details"
      }
 })
}
hide: any;

}
