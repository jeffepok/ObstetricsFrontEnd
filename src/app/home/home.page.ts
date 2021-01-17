import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { CreateAccountPopOverComponent } from './create-account-pop-over/create-account-pop-over.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public popoverController: PopoverController
  ) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CreateAccountPopOverComponent,
      event: ev,
      translucent: true,
      animated: true
    });
    return await popover.present();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(30)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.email]]})
  }
}
