import { Component, OnInit } from '@angular/core';
import {EmitterService} from '../../services/emitter/emitter.service';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

declare var google: any;

export interface AppState {
  locations: any;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    setTimeout(function(){
      EmitterService.get('123').emit('hello from map');
    }, 2000);
/*
    var mapProp = {
      center: new google.maps.LatLng(30.0817, -97.8429),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp); 
*/

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
    this.store.subscribe(val => {
      console.log('subscribed in map and got store value');
      console.log(val);
      this.setMap(val.locations.latitude, val.locations.longitude);
    });
  }

}
