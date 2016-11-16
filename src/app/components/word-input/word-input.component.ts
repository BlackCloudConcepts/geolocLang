import { Component, OnInit } from '@angular/core';
import { WhatThreeWordsService } from '../../services/what-three-words/what-three-words.service';
import { ConfigService } from '../../services/config/config.service';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { SET, UNSET, RESET } from '../../reducers/locations';

export interface AppState {
  locations: any;
}

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css']
})
export class WordInputComponent implements OnInit {

  config:any = {};
  form:any = {};
  locations: any;

  constructor(
    private whatThreeWordsService: WhatThreeWordsService,
    private configService: ConfigService,
    private store: Store<AppState>
  ) { 
    this.form = {
      word1: '',
      word2: '',
      word3: ''
    }
    this.locations = store.select('locations');
  }

  ngOnInit() {
    this.configService.getConfig()
      .subscribe(res => {
        this.config = res;
      });
  }

  submitWords() {
    this.whatThreeWordsService.getLatLong(this.form.word1+'.'+this.form.word2+'.'+this.form.word3, this.config).subscribe(
      data => {
        console.log(data);
        this.locations.dispatch({ type: SET, payload: data.geometry });
      },
      err => {
        // Log errors if any
        console.log(err);
      }
    );
  }

}
