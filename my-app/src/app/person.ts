export default class Person {
    // id
    private _id: string="";
    get Id(): string {
      return this._id;
    }
    set Id(value: string) {
      value.length >= 8 && value.length <= 9 ? (this._id = value) : null;
    }
  
    // name
    private _name: string = "";
    get Name(): string {
      return this._name;
    }
    set Name(value: string) {
      this._name = value;
    }
  
    // age
    private _age: number;
    get Age(): number {
      return this._age;
    }
    set Age(value: number) {
      value >= 0 && value <= 120 ? (this._age = value) : null;
    }
  
    // city
    private _city: string = "";
    get City(): string {
      return this._city;
    }
    set City(value: string) {
      this._city = value;
    }
  
    // isMale
    private _isMale: boolean=false;
    get IsMale(): boolean {
      return this._isMale;
    }
    set IsMale(value: boolean) {
      this._isMale = value;
    }
  
    // img
    private _img: string = "";
    get Img(): string {
      return this._img;
    }
    set Img(value: string) {
      this._img = value;
    }
  
    constructor(
      id: string,
      name: string,
      age: number,
      ismale: boolean,
      city: string,
      img: string
    ) {
      this.Id = id;
      this.Name = name;
      this.Age = age;
      this.IsMale = ismale;
      this.City = city;
      this.Img = img;
    }
  }