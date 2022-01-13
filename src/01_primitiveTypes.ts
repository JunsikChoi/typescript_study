// Type Annotations
/*
let 변수 이름: 타입 [= 초기값]
const 변수 이름: 타입 = 초기값

Primitive Types
자바스크립트는 7가지의 불변 데이터로 표현되는 원시 값을 갖는다.
타입스크립트는 자바스크립트의 원시 타입에 대응하는 타입을 갖고 각 값에 대한 Type annotation을 명세 할 수 있다.
*/

// Boolean -> boolean
let isPresent: boolean = false;
// Number -> number
let magic: number = 66.6;
// String -> string
let hello: string = "world";
// Symbol -> symbol
let penta: symbol = Symbol("star");
// BigInt -> biging
let biggy: bigint = 24n;
// Undefined -> undefined
let notDefined: undefined = undefined; // undefined는 타입이기도 하고 값이기도 하다.
// Null -> null
let notPresent: null = null;

// let으로 타입 주석과 함께 선언한 값은 명세에 해당하는 타입으로만 값을 재할당할 수 있다.
// magic = "string"; //Error 발생
