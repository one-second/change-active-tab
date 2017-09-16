import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListStuffPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-stuff',
  templateUrl: 'list-stuff.html',
})
export class ListStuffPage {

  private stuff: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListStuffPage');
  }

  ionViewDidEnter() {

    /**
     * INFO
     * You may want to use something to manage the state of your app.
     * I personally prefer redux or ngrx/store.
     * 
     * But that would be too much for this little demo app.
     * 
     * You can also play around with Ionic's Events Api to subscribe 
     * and publish state changes. 
     * 
     */

    try {
      this.stuff = JSON.parse(sessionStorage.getItem('stuff'));
    } catch(err) {
      this.stuff = [];
    }
  }

}
