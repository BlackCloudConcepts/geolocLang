import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ConfigService {

  constructor(private http: Http) {
  }

  // get config file and return observable
  getConfig() {
    return this.http.get('../../config.json')
      .map((res: Response) => res.json());
  }
}
