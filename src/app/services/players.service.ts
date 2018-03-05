import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService} from './data.service';

@Injectable()
export class PlayersService extends DataService{

  constructor(http: Http) {
    super('/players', http);
   }

  // Get all posts from the API
  // getAllPlayers() {
  //   return this.http.get('/api/posts')
  //     .map(res => res.json());
  // }
}
