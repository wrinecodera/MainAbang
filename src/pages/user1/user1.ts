import { Component } from '@angular/core';
import{ModalController} from 'ionic-angular';

@Component({
  selector: 'page-user1',
  templateUrl: 'user1.html',
})
export class User1Page {
  
  constructor(private modalCtrl:ModalController) {
  }

  
  onGoToFilter(){
    const modalPage= this.modalCtrl.create('FilterPage', {}, {
      enterAnimation: 'modal-translate-up-enter',
      leaveAnimation: 'modal-translate-up-leave'
    });
    
    
    modalPage.present();

  }
}
