import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { signUp } from '../data-type';
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
hide: any;
signupMessage:string|undefined
   constructor(private route : Router,private service: UserService){
    
   }
  ngOnInit(): void {
    
  }
  goToPage(pageName:string):void{ // button navigate the page 
    this.route.navigate(['user-login'])
  }
  signUp(data:signUp){
     this.service.Signup(data).subscribe((data)=>{
        console.log(data);
        this.signupMessage="Congrats!You are Successfully Registered........"
        if(data){
          alert("You are Successfully Registered........")
        }
     })
     setTimeout(()=>this.signupMessage=undefined,5000)

  }
}
