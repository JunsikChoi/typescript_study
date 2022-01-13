// Object Type에 대한 Annotation은 다음과 같이 만들 수 있다.

let center: { x: number; y: number } = {
  x: 0,
  y: 0,
};

// type alias를 통해 정의한 Object Type에 이름을 붙여 사용할 수 있다.

type Point = { x: number; y: number };

let unit: Point = {
  x: 1,
  y: 1,
};
