import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfifmCadastroUserPage } from './confifm-cadastro-user.page';

const routes: Routes = [
  {
    path: '',
    component: ConfifmCadastroUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfifmCadastroUserPageRoutingModule {}
