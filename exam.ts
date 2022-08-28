class Parent { 
  constructor(protected _name: string, private _age: number){}

  public print(): void {
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age}입니다.`)
  }
}

// const p = new Parent('우영', 25)
// p.print

class Child extends Parent {
  public gender = 'male'
  public _name = "Mark Jr."
}

const c = new Child('WOO', 50)

c._name 