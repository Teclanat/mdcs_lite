import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title:string = 'm-DCS Lite';
  constructor(public navCtrl: NavController) {

  }

}
