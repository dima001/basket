import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamId: string;
  teamName: string;

  constructor(private service: TeamService, private authService: AuthService) { }

  ngOnInit() {
    var tokenJson = {token: localStorage.getItem('token')};
    this.service.get(tokenJson).subscribe( response => {
      this.teamId = response._id;
      this.teamName = response.teamName;
    });
  }

}
