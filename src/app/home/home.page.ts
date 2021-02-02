import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { CreateAccountPopOverComponent } from './create-acount/create-account-pop-over/create-account-pop-over.component';
import { LoginDetails, LoginService } from './login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  form: FormGroup;
  loginDetails: LoginDetails;

  constructor(
    private fb: FormBuilder,
    private popoverController: PopoverController,
    private loginService: LoginService,
    private cookie: CookieService
  ) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CreateAccountPopOverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      animated: true
    });
    return await popover.present();

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.email]]})
  }
  login(form){
    this.loginDetails = {
      email: form.email,
      password: form.password
    }

    this.loginService.login(this.loginDetails).subscribe(data =>
      {
        this.cookie.set("userToken", data["auth_token"]);
      }
      )
  }




}
