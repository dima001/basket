import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataService} from './data.service';

@Injectable()
export class FinanceService extends DataService{

  constructor(http: Http) {
    super('../assets/finance.json', http);
   }

}
