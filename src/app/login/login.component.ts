import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(credentials) {
    console.log(credentials);
    this.authService.login(credentials)
      .subscribe(result => { 
        console.log("login component result block");
        if (result){
          console.log("login component result is true block");

          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/home']);
        }
        else {
          console.log("login component result is false block");
          this.invalidLogin = true; 
        }
      });
  }
}
