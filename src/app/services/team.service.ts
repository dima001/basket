import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService} from './data.service';

@Injectable()
export class TeamService extends DataService {
  
  constructor(http: Http) {
    super('/team', http);
   }

}
