import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KoranPageRoutingModule } from './koran-routing.module';

import { KoranPage } from './koran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KoranPageRoutingModule
  ],
  declarations: [KoranPage]
})
export class KoranPageModule {}
