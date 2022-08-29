class Person2 <T, K> { 
 private _name: T ;
 private _age: K;

 constructor(name: T, age: K){
  this._name = name ;
  this._age = age ;
 }
}

new Person2('woo', 25)

new Person2<string, number> ('woo', 25) 