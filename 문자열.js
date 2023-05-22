// 문자열 값 (원시 값)
var str = 'word'
str.toUpperCase();

console.log(str);

//

const un = undefined
const nu = null
const bool = false
const num = '0'
const str = '문자열'

console.log(typeof un)
console.log(typeof nu)
console.log(typeof bool);
console.log(typeof num);
console.log(typeof str);
// 원시 값이 아닌 데이터 타입은 즉..! 래퍼런스, 객체 타입!

/**
 * 동등 연산자를 사용할 때
 * 엄격한 비교 => ===
 * 느슨한 비교 => ==
 */

// 좌항에는 문자열의 '0' == 우항에는 숫자의 0
if (num === 0){
    console.log('num은 0입니다');
} else {
    console.log('nume은 0이 아닙니다');
}


// 객체 타입
const obj = {
    name: 'jang',
}

const arr = ['jang']

function func() {
    return 'jang'
}

console.log(typeof obj);
console.log(typeof arr);
console.log(typeof func);