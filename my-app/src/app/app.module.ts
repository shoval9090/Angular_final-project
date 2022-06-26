import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsModule } from './residents/students.module';
import { EmployeesModule } from './employees/employees.module';
import { BussinesListComponent } from './bussines/bussines-list/bussines-list.component';
import { BussinessModule } from './bussines/bussiness.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    EmployeesModule,
    BussinessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
