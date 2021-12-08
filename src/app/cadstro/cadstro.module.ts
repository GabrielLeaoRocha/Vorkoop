import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadstroPageRoutingModule } from './cadstro-routing.module';

import { CadstroPage } from './cadstro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadstroPageRoutingModule
  ],
  declarations: [CadstroPage]
})
export class CadstroPageModule {}
