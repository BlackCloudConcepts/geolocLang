import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  config = undefined;

  constructor(
    private configService: ConfigService
  ) {
/*
    let _this = this;
    setTimeout(function(){ 
      _this.configService.getConfig()
        .subscribe(res => {
          _this.config = res;
          console.log(_this.config);
          _this.init();
        });
    }, 3000);
*/
  }

  ngOnInit() {
  }

  init() {
  }

}
