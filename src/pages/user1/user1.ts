import { Component } from "@angular/core";
import {
  ModalController,
  LoadingController,
  ToastController
} from "ionic-angular";
import { Platform } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
import { AlertController } from "ionic-angular";

// import {

//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   Marker,
//   GoogleMapsAnimation,
//   MyLocation,
//   Marker
// } from '@ionic-native/google-maps';

@Component({
  selector: "page-user1",
  templateUrl: "user1.html"
})
export class User1Page {
  lat: number;
  lng: number;

  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
    private geolocation: Geolocation,
    private alerCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.lat = 36.7783;
    this.lng = 119.4179;

    // platform.ready().then(() => {

    //   // get current position
    //   geolocation.getCurrentPosition().then(pos => {
    //     console.log('----lat: ' + pos.coords.latitude + ', -----lon: ' + pos.coords.longitude);
    //   });

    //   const watch = geolocation.watchPosition().subscribe(pos => {
    //     console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    //   });

    //   // to stop watching
    //   watch.unsubscribe();

    // });
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: "Location Confirmation?",
      message: "Do you agree to locate your current location?",
      buttons: [
        {
          text: "Disagree",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Agree",
          handler: () => {
            const loader = this.loadingCtrl.create({
              content: "Getting your location..."
            });
            loader.present();
            this.geolocation
              .getCurrentPosition()
              .then(pos => {
                loader.dismiss();
                this.lat = pos.coords.latitude;
                this.lng = pos.coords.longitude;
              })
              .catch(error => {
                loader.dismiss();
                const toast = this.toastCtrl.create({
                  message: "Could get location, please pick it manually!",
                  duration: 2500
                });
                toast.present();
              });
          }
        }
      ]
    });
    confirm.present();
  }

  onGoToFilter() {
    const modalPage = this.modalCtrl.create(
      "FilterPage",
      {},
      {
        enterAnimation: "modal-translate-up-enter",
        leaveAnimation: "modal-translate-up-leave"
      }
    );

    modalPage.present();
  }
}
