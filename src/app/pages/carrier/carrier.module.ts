import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierComponent } from './carrier.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    CarrierComponent 
  ],
  imports: [
    CommonModule,
    CarrierRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,

  ]
})
export class CarrierModule { }
