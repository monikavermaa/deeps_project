import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Login } from '../data-type';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isValidUser = new EventEmitter<boolean>(false)
  constructor(private http:HttpClient, private route : Router ) { 
  
  }
  Signup(data:any){
    console.warn(data)
    return this.http.post("http://localhost:3000/customer",data);
  }
  Signin(data:Login){
    return this.http.get(`http://localhost:3000/customer?name=${data.name}&email=${data.email}&password=${data.password}`,{observe:'response'}) 
    .subscribe((result: any)=>{
      if(result && result.body && result.body.length){
        this.isValidUser.emit(false)
         alert("Succefully Loggedin........")
         this.route.navigate(['user-home'])

      }
      else{
        this.isValidUser.emit(true)
        alert("Invalid Emailid or passwords..")
      }
    })
  }
}
