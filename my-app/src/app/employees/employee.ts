import Person from "../person";

export default class Employee extends Person {
    // workplace
    private _workplace: string="";
    get Workplace(): string {
      return this._workplace;
    }
    set Workplace(value: string) {
        this._workplace = value;
    }
  
    // hours
    private _hours: number = 0;
    get Hours(): number {
      return this._hours;
    }
    set Hours(value: number) {
      value >= 0 && value <= 744 ? (this._hours = value) : null;
    }
  
    // salary
    private _salary:number = 0;
    get Salary(): number {
      return this._salary;
    }
    set Salary(value: number) {
        this._salary = value;
    }
  
    constructor(
        id: string,
        name: string,
        age: number,
        ismale: boolean,
        city: string,
        img: string,
        workplace: string,
        hours: number,
        salary: number
    ) {
        super(id, name, age, ismale, city, img)
        this.Workplace = workplace;
        this.Hours = hours;
        this.Salary = salary;
     
      
    }
  }