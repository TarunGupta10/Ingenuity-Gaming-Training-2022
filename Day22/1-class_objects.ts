class Person{
    empCode:number
    empName:string
    constructor(code:number, name:string){
        console.log("constructor");
        this.empCode = code
        this.empName = name
    }
    // class Methods
    dispDetail():void{
        console.log(`Code: ${this.empCode}\nName:${this.empName}`);
    }
}

let emp1 = new Person(101, "Tarun")
emp1.dispDetail()

// Access Modifiers
// 1.  public: can be access outside
// 2. private: can be access online inside class
// 3. protected: 
