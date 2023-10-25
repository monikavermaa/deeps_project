import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, signUp } from '../data-type';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private http: HttpClient, private router: Router) { 
    
  }
  userSignUp(data: signUp) {
    console.warn("userservice called.......")
    return this.http.post("http://localhost:3000/user", data);
  }
  userLogin(data: Login) {
    console.warn("loginservice called.....")
    this.http.get(`http://localhost:3000/user? email=${data.email}&password=${data.password}`, { observe: 'response' })
      .subscribe((result: any) => {
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        console.warn(result)
        if (result && result.body && result.body.length) {
          console.warn("User Loggedin.....")
          alert("Succesfully logged in....")
          this.router.navigate(['seller-home'])
        }
        else{
          console.log("failed...........")
          alert("Invalid EmailId or passwords....")

        }
      })
  }
}
