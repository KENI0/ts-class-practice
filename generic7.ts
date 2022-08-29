interface Iperson {
  name: string; 
  age: number;

}

const person: Iperson = {
  name: 'woo',
  age: 25,
}

//Iperson[keyof Iperson]
// ==> Iperson['name' | 'age']
// ==> Iperson['name'] | Iperson ['age']
// ==> string | number 


function getProp<T, K extends keyof T >(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(person,'name')


function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value ;
}

setProp(person,'name','young')