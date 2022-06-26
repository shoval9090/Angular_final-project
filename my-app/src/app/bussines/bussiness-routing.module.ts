import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinesListComponent } from './bussines-list/bussines-list.component';

const routes: Routes = [
  {path:'business', component:BussinesListComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BussinessRoutingModule { }
