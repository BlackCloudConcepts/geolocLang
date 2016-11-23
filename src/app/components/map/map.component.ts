import { Component, OnInit } from '@angular/core';
import {EmitterService} from '../../services/emitter/emitter.service';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Map } from 'immutable';

declare var google: any;

export interface AppState {
  locations: any;
  flags: any;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  locations: any;
  flags: any;

  constructor(
    private store: Store<AppState>
  ) { 
    this.locations = store.select('locations');
    this.flags = store.select('flags');
  }

  ngOnInit() {
    setTimeout(function(){
      EmitterService.get('123').emit('hello from map');
    }, 2000);

    this.setMap(30.0817, -97.8429);
    this.startObserving();
  }

  setMap(lat, lng) {
    var mapProp = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp); 
  }

  startObserving() {
    this.locations.subscribe(val => {
      console.log('subscribed in map and got store value');
      if (val !== {}){
        var myList = val.get('locations');
        if (myList) {
          var firstObj = myList.first();
          console.log(firstObj.locs);
          var locObj = myList.last();
          console.log(locObj.locs);
          this.setMap(locObj.locs.lat, locObj.locs.lng);
        }
      }
    });
  }

}
