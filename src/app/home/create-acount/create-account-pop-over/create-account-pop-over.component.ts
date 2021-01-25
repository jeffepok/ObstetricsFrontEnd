import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} 
from '@angular/forms';
import { CreateAccountService } from '../create-account.service';

@Component({
  selector: 'app-create-account-pop-over',
  templateUrl: './create-account-pop-over.component.html',
  providers: [CreateAccountService],
  styleUrls: ['./create-account-pop-over.component.scss'],
})
export class CreateAccountPopOverComponent implements OnInit {
  formValueChanges$;
  registrationForm: FormGroup;
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
    this.createAccountService.createAccount(form).subscribe(data =>
      console.log(data)
      );
  }

}
