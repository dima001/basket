import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private authService: AuthService) { }
}
