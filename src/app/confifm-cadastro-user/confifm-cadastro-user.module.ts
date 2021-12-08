import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfifmCadastroUserPageRoutingModule } from './confifm-cadastro-user-routing.module';

import { ConfifmCadastroUserPage } from './confifm-cadastro-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfifmCadastroUserPageRoutingModule
  ],
  declarations: [ConfifmCadastroUserPage]
})
export class ConfifmCadastroUserPageModule {}
