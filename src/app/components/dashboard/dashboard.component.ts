import { Component, OnInit } from '@angular/core';
import { WhatThreeWordsService } from '../../services/what-three-words/what-three-words.service';
import { ConfigService } from '../../services/config/config.service';
import {EmitterService} from '../../services/emitter/emitter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  config:any = {};

  constructor(
    private whatThreeWordsService: WhatThreeWordsService,
    private configService: ConfigService
  ) {
     
  }

  ngOnInit() {
    console.log('dashboard');
    EmitterService.get('123').subscribe(value => console.log(value));
    this.configService.getConfig()
      .subscribe(res => {
        this.config = res;
        console.log(this.config);
        this.init();
      });
  }

  init() {
    this.whatThreeWordsService.getLatLong('index.home.raft', this.config).subscribe(
      data => {
        // Emit list event
      //    EmitterService.get(this.listId).emit(comments);
        console.log(data);
      },
      err => {
        // Log errors if any
        console.log(err);
      }
    );
  }

}
