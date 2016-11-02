import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ConfigService {

  constructor(private http: Http) {
  }

  cache = undefined;

  // get config file and return observable
  getConfig() {
    if (!this.cache) {
      console.log('from http');
      return this.http.get('../../config.json')
        .map((res: Response) => {
            this.cache = res.json();
            return this.cache;
          }
        );
    } else {
      console.log('from cache');
      return Observable.fromPromise(Promise.resolve(this.cache));
    }
  }

  getCache() {
    return this.cache;
  }
}
