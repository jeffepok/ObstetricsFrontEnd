import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} 
from '@angular/forms';
import { CreateAccountService } from '../create-account.service';
import {UserDetails} from '../create-account.service';
import { PopoverController } from '@ionic/angular';

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
    private createAccountService: CreateAccountService,
    private popover: PopoverController,
    ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required,Validators.maxLength(30)]],
      password: ['',  [Validators.required,Validators.minLength(8)]],
      re_password: ['',  [Validators.required,Validators.minLength(8)]],
    });

  }

  dismissPopover(){
    this.popover.dismiss();
  }

  createAccount(form){
    this.userDetails = {
      email : form.email,
      password : form.password,
      re_password : form.re_password,
    }
    this.createAccountService.createAccount(this.userDetails).subscribe(data =>
      alert("Account created succesffuly for " + data.email)
      );
  }

}
