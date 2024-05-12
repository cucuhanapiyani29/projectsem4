import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajalahPage } from './majalah.page';

const routes: Routes = [
  {
    path: '',
    component: MajalahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajalahPageRoutingModule {}
