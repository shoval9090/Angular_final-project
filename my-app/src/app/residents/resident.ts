import Person from "../person";

export default class Resident extends Person {
    // address
    private _address: string="";
    get Address(): string {
      return this._address;
    }
    set Address(value: string) {
        this._address = value;
    }
  
    // year
    private _year: number = 0;
    get Year(): number {
      return this._year;
    }
    set Year(value: number) {
      value >= 1900 && value <= 2022 ? (this._year = value) : null;
    }
  
    // status
    private _status: string = "";
    get Status(): string {
      return this._status;
    }
    set Status(value: string) {
      value == "A" || value == "B" || value == "C" || value == "D" ? (this._status = value) : null;
    }
  
    constructor(
        id: string,
        name: string,
        age: number,
        ismale: boolean,
        city: string,
        img: string,
        address: string,
        year: number,
        status: string
    ) {
        super(id, name, age, ismale, city, img)
        this.Address = address;
        this.Year = year;
        this.Status = status;
     
      
    }
  }