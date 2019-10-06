import { UserCredentialsService } from './../user-credentials.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName:string;
  lastName: string;
  email: string; 
  password: string;
  
  
  constructor(private userCredentialsService: UserCredentialsService ){}

  // constructor() { 
  //   this.someFunction()
  // }

  // someFunction() {
  //     this.userCredentialsService = new UserCredentialsService()

  // }




  ngOnInit() {
  }

  signUp(){
    console.log('inside signup')
    let userInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    } 
    console.log(userInfo)
    this.userCredentialsService.credentialInput.push(userInfo)
  }

}
