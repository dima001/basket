import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class LeagueService extends DataService{

  constructor(http: Http) {
    super('../../assets/teams.json', http);
   }
}
