class Person {
  name: string = '우영';
  age: number;

  constructor(age?: number) {
    if(age === undefined){
      this.age = 20;
    } else {
      this.age = age;
    }
  }
}

const p1 = new Person(25);
const p2 = new Person();

p1.age = 23
console.log(p1.age);