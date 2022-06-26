import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Resident from '../resident';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  resident:Observable<Resident>;

  constructor(private service: StudentService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.resident = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getResident(params.get("id")))
    );
  }

  goBack(){
    // router.navigate() - a function that gets an array of values(parameters), 
    // and go to that URL in the website. 
    this.router.navigate(['/residents']);
  }
}
