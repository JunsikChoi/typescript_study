"use strict";
// javascript의 함수 선언문에도 타입 주석을 달 수 있다.
function addXY(x, y) {
    return x + y;
}
// 반환이 없을 경우 void 타입을 줄 수 있다.
// void type은 함수 반환타입으로만 사용할 수 있다.
function log(message) {
    console.log(`LOG: ${message}`);
}
// rest parameter가 있는 경우
function sumAll(...values) {
    return values.reduce((previous, current) => previous + current);
}
let f = (a, b) => a + b;
