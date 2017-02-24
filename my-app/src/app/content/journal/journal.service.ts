import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Journal } from './journal';


@Injectable()
export class JournalService {

    //this builds the url for us
    private baseAPIKey = `94a08da1fecbb6e8b46990538c7b50b2`;
    private baseJournalUrl = `http://portal.helloitscody.com/inhabitent/api/get/${this.baseAPIKey}/?`;
    private postJournalUrl = `http://portal.helloitscody.com/inhabitent/api/post/${this.baseAPIKey}/?`;
    private baseJournalParams = `params=[{"name":"posts_per_page","value":"10"},{"name":"paged","value":"1"}]`;

    private journalUrl = this.baseJournalUrl + encodeURI(this.baseJournalParams);
    private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Oring': '*'});

    private JournalArr: Journal[] = <Journal[]>[];


    constructor(private http: Http) {
        console.log("*****journal creating service****");
    };

    getJournals(): Promise<Journal[]> {
        return this.http.get(this.journalUrl).toPromise()
            .then(response => {
                let returnedData = response.json();

                console.log("!!!!!the journal.service.ts is working!!!");
                let compareKeys = (a,b) => {
                    let aKeys = Object.keys(a).sort();
                    let bKeys = Object.keys(b).sort();
                    let journalMatch = JSON.stringify(aKeys).toLowerCase() === JSON.stringify(bKeys).toLowerCase();
                    console.log('compare keys/ props returns ${journalMatch}');
                    return journalMatch;

                };
                let keyToCompare = new Journal();
                console.log(keyToCompare);
                for (let prop in returnedData){
                    let currentObject:Journal = <Journal>returnedData[prop];
                    //console.log(currentObject);
                    //console.log( compareKeys(currentObject, keyToCompare) );
                    if (compareKeys(currentObject, keyToCompare)){
                        this.JournalArr.push(currentObject);
                    }
                }
                console.log("***** in journal.service.ts *****");
                return this.JournalArr;
            })
    }

}
