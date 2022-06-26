import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../business.service';
import Business from '../business';

@Component({
  selector: 'app-bussines-list',
  templateUrl: './bussines-list.component.html',
  styleUrls: ['./bussines-list.component.css']
})
export class BussinesListComponent implements OnInit {

  businesses: Observable<Business[]>;
  selectedId:number = 0;
 

  // Call the service in the ctor:
  constructor(private service: BusinessService, private route:ActivatedRoute) { }


  ngOnInit(): void {

    // this.students will hold the value that returns from getResidents() in service. 
    this.businesses = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id'));
        return this.service.getBusinesses();
      })
    )
  }
}
