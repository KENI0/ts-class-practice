function helloBasic<T>(message: T): T {
  return message
}

//2가지 방식이 있다

//직접 설정
helloBasic<string>('woo')

//값에 따라 T가 추론되는 방식 
helloBasic(34);

//----------------------------------------------------------------------
function helloBasic2<T, U>(message: T, comment: U ): T {
  return message
}

helloBasic2 <string,number> ('woo', 25);
helloBasic2(36, 367);
