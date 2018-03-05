import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  invalidCredentials: boolean = false;
  countries = ["Israel","Russia"];

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService) { }
    

  signUp(credentials) {
    console.log(credentials);

    this.authService.signup(credentials)
      .subscribe(result => { 
        if (result){
          console.log("signup complete.");
          this.router.navigate(['/home']);
        }
        else {
          console.log("login component result is false block");
          this.invalidCredentials = true; 
        }
      });
  }

  log(password: HTMLInputElement){
    console.log(password);
  }
}
