function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}
//인자와 리턴값이 동일한 모습 

function hello(message: any): any {
  return message
}
console.log(hello('WOO').length)
console.log(hello(345).length)


function helloGeneric<T>(message: T): T {
  return message
}

console.log(helloGeneric('WOO').length)
console.log(helloGeneric(345).length)
console.log(helloGeneric(true))