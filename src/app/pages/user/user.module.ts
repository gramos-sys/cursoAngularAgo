import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserTableComponent } from './user-table/user-table.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    UserComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class UserModule { }
