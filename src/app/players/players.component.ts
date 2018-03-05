import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})



export class PlayersComponent implements OnInit {
  // instantiate posts to an empty array
  players: any[];

  constructor(private route: ActivatedRoute, private playersService: PlayersService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.playersService.getAll().subscribe(players => {
      this.players = players;
    });
  }
}
