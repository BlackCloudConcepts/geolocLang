import { Component } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import {ViewEncapsulation} from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  config:any = {};

  constructor(
  ) {
  }

  title = 'BLKCLD : GeoLocLang';

  ngOnInit() {
  }

}
