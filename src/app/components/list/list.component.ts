import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Map } from 'immutable';

export interface AppState {
  locations: any;
  flags: any;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  locations: any;
  flags: any;
  list: any[];

  constructor(
    private store: Store<AppState>
  ) {
    this.locations = store.select('locations');
    this.flags = store.select('flags');
    this.list = [];
  }

  ngOnInit() {
    // button which refreshes the list of searches (point being to pull from existing list, not observing changes actively)

  }

  fetchSearches() {
    var _this = this;
    this.locations.subscribe(val => {
      _this.list = [];
      val.get('locations').forEach(function(item){
        _this.list.push(item);
      });
    });
  }

}
