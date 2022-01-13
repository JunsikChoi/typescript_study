// 클래스 인스턴스에 대한 타입

// 클래스 인스턴스에 대한 타입 명세는 클래스명<[제네릭 타입 변수]>의 형태로 가능하다.

// Array
let array: Array<number> = [1, 2, 3];
// 또는
let array2: number[] = [1, 2, 3];

// Tuple
// Array의 길이와 값의 타입을 제한할 수 있다.
let tuple: [number, number] = [0, 0];
let tuple2: [number, string] = [0, "s"];
