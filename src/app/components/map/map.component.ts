import { Component, OnInit } from '@angular/core';
import {EmitterService} from '../../services/emitter/emitter.service';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function(){
      EmitterService.get('123').emit('hello from map');
    }, 2000);
    var mapProp = {
      center: new google.maps.LatLng(30.0817, -97.8429),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp); 
  }

}
