import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {HTTP_PROVIDERS, Http} from "@angular/http";
import {DataTableDirectives} from 'angular2-datatable/datatable';
import {SearchPipe} from './search-pipe';
import {SearchBox} from './search-box';
//import * as _ from 'lodash';


@Component({
    selector: 'osbb-table',
    templateUrl: './app/osbb/osbb.component.html',
    providers: [HTTP_PROVIDERS],
    directives: [DataTableDirectives, SearchBox],
	pipes:[SearchPipe]
    //pipes: [DatePipe]
})
export class OsbbComponent {

    private data;
	//@Input() term;

    constructor(private http:Http) {
       http.get("app/osbb/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
    }

    private sortByWordLength = (a:any) => {
        return a.name.length;
    }
    
    public removeItem(item: any) {
      this.data = _.filter(this.data, (elem)=>elem!=item);
      console.log("Remove: ", item.email);
    }

}