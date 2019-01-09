import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { BhouselistPage } from "../bhouselist/bhouselist";
import { BhousemapPage } from "../bhousemap/bhousemap";
import { FilterPage } from "../filter/filter";

@Component({
  selector: "page-user2",
  templateUrl: "listandmap1.html"
})
export class Listandmap1Page {
  tab1List = BhouselistPage;
  tab2Map = BhousemapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad User2Page");
  }
  onGoToFilter() {
    this.navCtrl.push(FilterPage);
  }
}
