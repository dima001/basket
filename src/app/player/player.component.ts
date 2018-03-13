import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: any;
  // firstName: string;

  constructor(private route: ActivatedRoute, private playerService: PlayerService){}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      console.log(params);
      
      var playerIdJson = {playerId: params.get('playerid')};
      this.playerService.get(playerIdJson).subscribe(player => {
        console.log(player);
        // debugger
        this.player = player;
        // this.firstName = player.firstName;
      });

    });
      
    
  }

}
