import { Component, ViewChild } from '@angular/core';
import { NavController, CardContent } from 'ionic-angular';
import { SuccessPage } from '../success/success';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onClick01(){
	this.navCtrl.push(SuccessPage);
	
	
  }
}

