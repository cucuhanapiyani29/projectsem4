import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MajalahPageRoutingModule } from './majalah-routing.module';

import { MajalahPage } from './majalah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MajalahPageRoutingModule
  ],
  declarations: [MajalahPage]
})
export class MajalahPageModule {}
