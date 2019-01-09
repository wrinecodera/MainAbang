import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BhouselistPage } from './bhouselist';

@NgModule({
  declarations: [
    BhouselistPage,
  ],
  imports: [
    IonicPageModule.forChild(BhouselistPage),
  ],
})
export class BhouselistPageModule {}
