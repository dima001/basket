import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../services/training.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  // instantiate posts to an empty array
  players: any[];

  constructor(private route: ActivatedRoute, private trainingService: TrainingService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.trainingService.getAll().subscribe(players => {
      this.players = players;
    });
  }

}
