import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../services/finance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  finance: any[];

  constructor(private route: ActivatedRoute, private financeService: FinanceService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.financeService.get(555).subscribe(finance => { //change to time/user id
      this.finance = finance;
    });
  }
}


