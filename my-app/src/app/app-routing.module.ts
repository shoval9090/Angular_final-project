import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinesListComponent } from './bussines/bussines-list/bussines-list.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';


const routes: Routes = [
  {path: 'employees', component: EmployeesListComponent},
  {path: 'business', component: BussinesListComponent},
  // {path: 'students', component: StudentsListComponent},
  // When we come to `localhost:4200` - it will go to: `localhost:4200/students`
  {path: '', redirectTo: '/residents', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
