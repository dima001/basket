import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class PlayerService extends DataService{

  constructor(http: Http) {
    super('/player', http);
   }

}
