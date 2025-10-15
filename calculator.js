// sum
function getSum(a, b) {
  return a + b;
}

// subtract
function getSub(a, b) {
  return a - b;
}

// multiply
function getMultiply(a, b) {
  return a * b;
}

// divide
function getDivide(a, b) {
  return a / b;
}

// 여기까지 무료 버전입니다.
// 추후 유료 버전 패치 예정입니다.

const Today = new Date();
console.log(`패치 날짜: ${Today}, 패치 버전: 1.1.1`);

// if sum
function getIfSum(a, b) {
  if (a > b) {
    return a + b;
  } else {
    return 'a값이 유효하지 않습니다. 다시 입력해 주세요.';
  }
}
