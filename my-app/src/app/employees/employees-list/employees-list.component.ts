import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import Employee from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Observable<Employee[]>;
  selectedId:number = 0;
 

  // Call the service in the ctor:
  constructor(private service: EmployeeService, private route:ActivatedRoute) { }

  // call the function when a class is loaded:
  // paramMap - list of all params in URL
  // localhost:4200/student/:id
  ngOnInit(): void {

    // this.students will hold the value that returns from getResidents() in service. 
    this.employees = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id'));
        return this.service.getEmployees();
      })
    )
  }
}
