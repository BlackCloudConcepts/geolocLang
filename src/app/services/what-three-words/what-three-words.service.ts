import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class WhatThreeWordsService {

  constructor(private http: Http) { 
  }
 
  private whatThreeWordsBaseForwardUrl:any = 'https://api.what3words.com/v2/forward?';
  
  private queryParams:any = '&display=full&format=json';

  getLatLong(addr:any, config:any) {
    let key:any = config.what_three_words_api_key;
    let whatThreeWordsUrl:any = this.whatThreeWordsBaseForwardUrl +
      'addr=' + addr + 
      this.queryParams +
      '&key=' + key;
    return this.http.get(whatThreeWordsUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 

}
