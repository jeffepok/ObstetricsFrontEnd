import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../home/login/login.service';
import { ActivatedRoute, Router } from '@angular/router'; 

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
    //initialize a variable to store cookie
    private cookie: CookieService,
    //initialize a variable for the loginService
    private loginService: LoginService,
    //router module to direct to individual components
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit() {
    //if user has no session get to home
    // this.route.paramMap.subscribe(url => {
    //   if(this.cookie.get("username") != url.get("username")){
    //     this.router.navigateByUrl('/');
    //   };
    // })

    //when this page loads use the loginService to get user data
    this.loginService.getUser(this.cookie.get("userToken"))
    .subscribe((data:any) => {
      this.email = data["email"];
      this.userName = data["username"];
    })
  }

  logout(){
    this.cookie.deleteAll();
    this.router.navigateByUrl('/');
    
  }
  biodata(){
    this.router.navigate(['(info:biodata)'], {relativeTo: this.route});
  }

}
