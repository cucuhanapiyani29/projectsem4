import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovelPage } from './novel.page';

const routes: Routes = [
  {
    path: '',
    component: NovelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovelPageRoutingModule {}
