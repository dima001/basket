import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService} from '../services/data.service';

@Injectable()
export class TrainingService extends DataService{

  constructor(http: Http) {
    super('/players', http);
   }


}
