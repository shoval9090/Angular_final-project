import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BussinessRoutingModule } from './bussiness-routing.module';
import { BussinesListComponent } from './bussines-list/bussines-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BussinesListComponent
  ],
  imports: [
    CommonModule,
    BussinessRoutingModule,
    FormsModule
  ]
})
export class BussinessModule { }
