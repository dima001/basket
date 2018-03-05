import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(){
    console.log("admin auth gard canActivate");
    let user = this.authService.currentUser;
    console.log("admin auth gard before if in can Activate");
    console.log(user);
    console.log(user.admin);
    if(user && user.admin) return true;


    this.router.navigate(['/no-access']);
    return false;
  }

}
