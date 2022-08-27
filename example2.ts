class Person2 {
  constructor(public _name: string, public age: number){}

    get name() {
      return this._name + "Choi"
    }

    set name (n: string) {
      this._name = n;
    }
}

const p20 = new Person2('우영', 25)

console.log(p20.name)

p20.name = '최우영!!';
console.log(p20.name)
