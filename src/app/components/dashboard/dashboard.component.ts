import { Component, OnInit } from '@angular/core';
import { WhatThreeWordsService } from '../../services/what-three-words/what-three-words.service';
import { ConfigService } from '../../services/config/config.service';
import {EmitterService} from '../../services/emitter/emitter.service';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { SET, UNSET, RESET } from '../../reducers/locations';

export interface AppState {
  locations: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  config:any = {};
  //locations: Observable<any>;
  locations: any;

  constructor(
    private whatThreeWordsService: WhatThreeWordsService,
    private configService: ConfigService,
    private store: Store<AppState>
  ) {
    this.locations = store.select('locations');
  }

  ngOnInit() {
    console.log('dashboard');
    EmitterService.get('123').subscribe(value => console.log(value));
    this.configService.getConfig()
      .subscribe(res => {
        this.config = res;
        console.log(this.config);
        this.startObserving();
        this.init();
      });
  }

  init() {
    this.whatThreeWordsService.getLatLong('index.home.raft', this.config).subscribe(
      data => {
        // Emit list event
      //    EmitterService.get(this.listId).emit(comments);
        this.locations.dispatch({ type: SET, payload: data.geometry });
      },
      err => {
        // Log errors if any
        console.log(err);
      }
    );
  }

  startObserving() {
    this.store.subscribe(val => {
      console.log('subscribed and got store value');
      console.log(val);
    });  
  }
}
