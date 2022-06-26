import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { RESIDENTS } from './dummy-data-students';
import Resident from './resident';

@Injectable({
  // There is only 1 instance for StudentService
  providedIn: 'root'
})

export class StudentService {

  constructor() { }

  // A function to return the students array:
  getResidents():Observable<Resident[]> {
    return of(RESIDENTS);
  }

  // pipe vs substcribe
  getResident(id: number | string){
    return this.getResidents().pipe(
      // + - before `id` - turns a string into a number
      map((resident: Resident[]) => resident.find((r) => r.Id === id)!)
    );
  }
}
