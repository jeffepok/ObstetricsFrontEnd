import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../home/login/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  userName: string;

  constructor(
    private cookie: CookieService,
    private loginService: LoginService
    
  ) { }
  
  ngOnInit() {
    this.loginService.getUser(this.cookie.get("userToken"))
    .subscribe((data:any) => {
      this.email = data["email"];
    })
  }

}
