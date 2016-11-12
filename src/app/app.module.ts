// @angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// @ngrx
import { StoreModule } from '@ngrx/store';

// bootstrap
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';

// services
import { WhatThreeWordsService } from './services/what-three-words/what-three-words.service';
import { ConfigService } from './services/config/config.service';

// components
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';

// reducers
import { locationsReducer } from './reducers/locations';
import { WordInputComponent } from './components/word-input/word-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    MapComponent,
    WordInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/:startaddr', component: DashboardComponent },
      { path: '', component: HomeComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
    StoreModule.provideStore({ locations: locationsReducer })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    WhatThreeWordsService, 
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
