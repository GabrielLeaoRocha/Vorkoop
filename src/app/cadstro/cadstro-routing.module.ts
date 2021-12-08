import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadstroPage } from './cadstro.page';

const routes: Routes = [
  {
    path: '',
    component: CadstroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadstroPageRoutingModule {}
