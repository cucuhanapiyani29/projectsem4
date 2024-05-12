import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovelPageRoutingModule } from './novel-routing.module';

import { NovelPage } from './novel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovelPageRoutingModule
  ],
  declarations: [NovelPage]
})
export class NovelPageModule {}
