import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} 
from '@angular/forms';
import { CreateAccountService } from '../create-account.service';
import {UserDetails} from '../create-account.service';
@Component({
  selector: 'app-create-account-pop-over',
  templateUrl: './create-account-pop-over.component.html',
  providers: [CreateAccountService],
  styleUrls: ['./create-account-pop-over.component.scss'],
})
export class CreateAccountPopOverComponent implements OnInit {
  formValueChanges$;
  registrationForm: FormGroup;
  userDetails : UserDetails;
  constructor(
    private fb: FormBuilder,
    private createAccountService: CreateAccountService
    ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      first_name: ['', [Validators.required,Validators.maxLength(30)]],
      last_name: ['',  [Validators.required,Validators.maxLength(30)]],
      phone: ['', [Validators.required,Validators.maxLength(30)]],
      email: ['', [Validators.required,Validators.maxLength(30)]],
      username: ['', [Validators.required,Validators.minLength(4)]],
      password: ['',  [Validators.required,Validators.minLength(8)]],
      re_password: ['',  [Validators.required,Validators.minLength(8)]],
    });

  }


  createAccount(form){
    this.userDetails = {
      first_name : form.first_name,
      last_name : form.last_name,
      email : form.email,
      password : form.password,
      re_password : form.re_password,
      username : form.username,
      phone : form.phone
    }
    this.createAccountService.createAccount(this.userDetails).subscribe(data =>
      console.log(data.email)
      );
  }

}
