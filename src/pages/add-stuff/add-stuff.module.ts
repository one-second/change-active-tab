import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddStuffPage } from './add-stuff';

@NgModule({
  declarations: [
    AddStuffPage,
  ],
  entryComponents: [AddStuffPage],
  imports: [
    IonicPageModule.forChild(AddStuffPage),
  ],
})
export class AddStuffPageModule {}
