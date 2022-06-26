import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import Business from './business';
import { BUSINESS } from './dummy-data-business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor() { }
  // A function to return the students array:
  getBusinesses():Observable<Business[]> {
    return of(BUSINESS);
  }

  // pipe vs substcribe
  getBusiness(id: number | string){
    return this.getBusinesses().pipe(
      // + - before `id` - turns a string into a number
      map((business: Business[]) => business.find((b) => b.Id === id)!)
    );
  }
}
