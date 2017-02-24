import {Component, OnInit} from '@angular/core';

import { Journal } from './journal';
import { JournalService } from './journal.service';


@Component({
  // moduleID: module.id,
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  journalEntries: Journal[] = [];

  constructor(private journalService: JournalService)
  {
    console.log("creating journal component done!!!!");
  }

  ngOnInit(): void {

    this.getJournals();
    // console.log(this.journalEntries);
  }

  getJournals(): void {
    console.log('getting journals');
    let myPromiseOfJournals:Promise<Journal[]> = this.journalService.getJournals();

    myPromiseOfJournals.then(
        journals => {

          this.journalEntries = <Journal[]>journals;
          console.log("*****journal.component.ts again yay*****");
          console.log(this.journalEntries);
        });
  }

}
