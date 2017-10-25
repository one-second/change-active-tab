import { Component } from '@angular/core';
import { ModalController, NavController, Events, App, Tabs } from 'ionic-angular';


import { HomePage } from '../home/home';
import { AddStuffPage } from '../add-stuff/add-stuff';
import { ListStuffPage } from '../list-stuff/list-stuff';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListStuffPage;

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private events: Events,
    private app: App
  ) {
    this.events.subscribe('Kumar', () => {
      setTimeout(() => {
        const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
        tabsNav.getActiveChildNavs()[0].pop()
        tabsNav.select(1);
      }, 500)
    })
  }

  openCamera() {
    const modal = this.modalCtrl.create(AddStuffPage);
    modal.present();
  }
}
