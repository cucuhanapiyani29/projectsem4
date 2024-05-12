import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerpustakaanPageRoutingModule } from './perpustakaan-routing.module';

import { PerpustakaanPage } from './perpustakaan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerpustakaanPageRoutingModule
  ],
  declarations: [PerpustakaanPage]
})
export class PerpustakaanPageModule {}
