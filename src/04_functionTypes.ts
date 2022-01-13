// javascript의 함수 선언문에도 타입 주석을 달 수 있다.

function addXY(x: number, y: number): number {
  return x + y;
}

// 반환이 없을 경우 void 타입을 줄 수 있다.
// void type은 함수 반환타입으로만 사용할 수 있다.

function log(message: string): void {
  console.log(`LOG: ${message}`);
}

// rest parameter가 있는 경우

function sumAll(...values: number[]): number {
  return values.reduce((previous, current) => previous + current);
}

// function의 타입
// javascript에서는 함수 또한 first-class object로 변수에 할당되거나 다른 함수의 파라미터로 입력될 수 있다.
// typescript에서 js의 함수 타입 또한 표현 가능하다.
// 함수의 타입을 타입 시그니쳐라고 하는데, es6의 arrow function과 형태가 동일하다.
// 타입 시그니쳐 또한 type alias를 통해 따로 이름붙여서 사용이 가능하다.

type addTwoNumFunc = (a: number, b: number) => number;

let f: addTwoNumFunc = (a, b) => a + b;
