import { Component } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { WhatThreeWordsService } from './services/what-three-words/what-three-words.service';
import { ConfigService } from './services/config/config.service';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  config:any = {};

  constructor(
    private whatThreeWordsService: WhatThreeWordsService,
    private configService: ConfigService
  ) {
    // fetch config file with api keys
    this.configService.getConfig()
      .subscribe(res => {
        this.config = res;
        console.log(this.config);
        this.init();
      });
  }

  title = 'Geoloc-Lang';

  ngOnInit() {
  }

  // initializes the component
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
