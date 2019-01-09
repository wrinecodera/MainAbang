import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Listandmap1Page } from "../listandmap1/listandmap1";
@Component({
  selector: "page-user1",
  templateUrl: "user1.html"
})
export class User1Page {
  constructor(public navCtrl: NavController) {}
  lapulapu() {
    this.navCtrl.push(Listandmap1Page);
  }
  Cebu() {
    this.navCtrl.push(Listandmap1Page);
  }
  Mandaue() {
    this.navCtrl.push(Listandmap1Page);
  }
}
