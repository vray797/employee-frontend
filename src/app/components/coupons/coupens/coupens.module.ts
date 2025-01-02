import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupensRoutingModule } from './coupens-routing.module';
import { CouponsComponent } from '../coupons.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CouponsComponent,
    CoupensRoutingModule
  ]
})
export class CoupensModule { }
