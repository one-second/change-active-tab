import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public events: Events) {

  }

  addPage() {
    this.navCtrl.push('AddStuffPage');

    setTimeout(() => {
      // at some point you publish the event on the pushed page
      this.events.publish('Kumar')

    }, 2000)
  }

}
