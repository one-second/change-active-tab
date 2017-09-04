import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Tabs } from 'ionic-angular';

/**
 * Generated class for the AddStuffPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-stuff',
  templateUrl: 'add-stuff.html',
})
export class AddStuffPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStuffPage');
  }

  public addSomeStuff(text: string) {

    this.storeStuff(text);

    /**
     * IMPORTANT START
     */
    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
    tabsNav.select(1);
    this.navCtrl.pop();
    /**
     * IMPORTANT END
     */
  }

  private storeStuff(text: string) {
    let stuff: string[];
    try {
      stuff = JSON.parse(sessionStorage.getItem('stuff'));
      if (!stuff) stuff = [];
    }
    catch (err) {
      stuff = [];
    }

    stuff.push(text);
    sessionStorage.setItem('stuff', JSON.stringify(stuff));
  }

  public isButtonDisabled(text: string) {
    return !text && !text.length
  }

}
