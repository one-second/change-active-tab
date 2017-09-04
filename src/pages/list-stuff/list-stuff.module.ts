import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListStuffPage } from './list-stuff';

@NgModule({
  declarations: [
    ListStuffPage,
  ],
  entryComponents: [ListStuffPage],
  imports: [
    IonicPageModule.forChild(ListStuffPage),
  ],
})
export class ListStuffPageModule { }
