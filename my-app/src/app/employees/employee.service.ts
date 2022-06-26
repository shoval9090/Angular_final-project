import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { EMPLOYEES } from './dummy-data-employees';
import Employee from './employee';

@Injectable({
  
  providedIn: 'root'
})

export class EmployeeService {

  constructor() { }

  // A function to return the students array:
  getEmployees():Observable<Employee[]> {
    return of(EMPLOYEES);
  }

  // pipe vs substcribe
  getEmployee(id: number | string){
    return this.getEmployees().pipe(
      // + - before `id` - turns a string into a number
      map((employee: Employee[]) => employee.find((e) => e.Id === id)!)
    );
  }
}
