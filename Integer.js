/**
 * 정수 (Integer)
 * - 자바스크립트에는 부동소수점(IEEE-754) 숫자만 존재
 * - 정수를 저장하는 2가지 방법
 * 1. 10진 소수가 없는 작은 숫자는 정수로 오래 유지 (예. 31비트)
 * 2. 비트 연산자를 이용 32비트 정수로 바꿔 반환
 */

// 안전한 정수의 최대값 
Number.MAX_SAFE_INTEGER
// 안전한 정수의 최소값 
Number.MIN_SAFE_INTEGER

// 소수점을 다루는 방법
Math.floor(4) // 내림 4
Math.ceil(4.9) // 올림 5 
Math.round(4.6) // 반올림 5

/**
 * 정수로 변환
 */

parseInt('10'); // 10
Number('10'); // 10

Number.MAX_SAFE_INTEGER // 내장객체
Number.isInteger()
Number(undefined); // Nan
Number.isSafeInteger()
Number.parseInt() // 필수로 숫자를 넣어줘야 한다. 10진수가 기본으로 생각하지만, 
Number.parseInt(string, [ radix]) // 몇 진수인지 옵션 매개변수를 통해 넣어줘야 한다.

function parseInt2(value, radix) {
  if(radix === undefined) {
    return Number(value)
  }
  return
}

