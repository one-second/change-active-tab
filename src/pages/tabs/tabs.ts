import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';


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
    private navCtrl: NavController
  ) {}

  openCamera() {
    const modal = this.modalCtrl.create(AddStuffPage);
    modal.present();
  }
}
