import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerpustakaanPage } from './perpustakaan.page';

const routes: Routes = [
  {
    path: '',
    component: PerpustakaanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerpustakaanPageRoutingModule {}
