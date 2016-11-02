import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { WhatThreeWordsService } from './services/what-three-words/what-three-words.service';
import { ConfigService } from './services/config/config.service';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent
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
    ])
  ],
  providers: [WhatThreeWordsService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
