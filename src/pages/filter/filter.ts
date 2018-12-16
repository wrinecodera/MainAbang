import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  
  constructor(private viewCtrl: ViewController) {
  }

onClose(){
  this.viewCtrl.dismiss();

}

}
