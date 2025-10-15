// Q.배열의 길이를 이용해 마지막 요소를 제거한 새로운 배열을 만들어 출력하세요.
const items = ['A', 'B', 'C', 'D'];

// 여기에 코드 작성
items.length = 3;
console.log(items);
// 출력 결과: ['A', 'B', 'C']

// 이 방법은 새 배열을 만드는 게 아니라 원본을 직접 수정한다.
// 만약 원본을 유지하고 싶으면 어떻게 할까?

// 얕은 복사
const items2 = [...items];
items2.length = 3;
console.log(items2); // [ 'A', 'B', 'C' ]
console.log(items); // [ 'A', 'B', 'C', 'D' ]

// 깊은 복사
const items3 = structuredClone(items);
items3.length = 3;
console.log(items3); // [ 'A', 'B', 'C' ]
console.log(items); // [ 'A', 'B', 'C', 'D' ]

// splice
const items4 = items;
items4.splice(3, 1);
console.log(items4); // [ 'A', 'B', 'C' ]
console.log(items); // [ 'A', 'B', 'C' ]

// slice
const items5 = items.slice(0, 3);
console.log(items5); // [ 'A', 'B', 'C' ]
console.log(items); // [ 'A', 'B', 'C', 'D' ]

// filter
const items6 = items.filter((n) => n !== 'D');
console.log(items6); // [ 'A', 'B', 'C' ]
console.log(items); // [ 'A', 'B', 'C', 'D' ]

// forEach
const items7 = items;
items7.forEach((n) => {
  if (n === 'D') items7.pop();
});
console.log(items7); // [ 'A', 'B', 'C' ]
console.log(items); // [ 'A', 'B', 'C' ]
