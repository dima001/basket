import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../services/league.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  
  teams: any[];

  constructor(private route: ActivatedRoute, private leagueService: LeagueService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.leagueService.getAll().subscribe(teams => {
      this.teams = teams;
    });
  }
}
