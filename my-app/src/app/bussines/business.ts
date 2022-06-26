
export default class Business{
    // name
    private _name: string="";
    get Name(): string {
      return this._name;
    }
    set Name(value: string) {
        this._name = value;
    }
     // id
     private _id: number = 0;
     get Id(): number {
       return this._id;
     }
     set Id(value: number) {
      value >= 1000 && value <= 5000 ? (this._id = value) : null;
     }
  
    // employees
    private _employees: number = 0;
    get Employees(): number {
      return this._employees;
    }
    set Employees(value: number) {
      this._employees = value;
    }
  
    // profit
    private _profit:number = 0;
    get Profit(): number {
      return this._profit;
    }
    set Profit(value: number) {
        this._profit = value;
    }
  
    constructor(
        name: string,
        id: number,
        employees: number,
        profit: number
    ) {
        this.Name = name;
        this.Id = id;
        this.Employees = employees;
        this.Profit = profit;
     
      
    }
  }