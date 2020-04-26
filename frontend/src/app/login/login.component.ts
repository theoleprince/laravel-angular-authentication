import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {AuthService} from '../_services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  
  message: string = '';
  isProcessing: boolean = false;
  hasError: boolean = false;
  isSuccess: boolean = false;

  constructor( private formBuilder: FormBuilder) { 

    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }
closeAlert(){
  
  this.hasError = false;
  this.isSuccess = false;
  this.message = '';
}
  onSubmit(loginData) {
    // Process loginout data here
    if(loginData.email.trim().length == 0 ||
      loginData.password.trim().length == 0
      ){
        this.hasError = true;
        this.isProcessing = false;
        this.message = "veuillez bien remplir le formulaire";
        console.error('Formulaire mal remplir');
        return;
      }
      this.isProcessing = true;
      this.loginForm.reset();
    console.log('Your order has been submitted', loginData);
    
  }


}