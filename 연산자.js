// === 서로 같은지 엄격하게 검사
// !== 서로 다른지 엄격하게 검사

const { type } = require("os");

// == 서로 같은지 느슨하게 검사
// != 서로 다른지 느슨하게 검사

let count = 0;
count +=1;
count ++; // 증가 연산자

console.log(count);

// && => and => 그리고
// || => or => 또는

const temp = 1 === '1' ? '참일때' : '거짓일때';

if (1==='1') {
    temp1 = '참일때';
} else {
    tem2 = '거짓일때';
}

////////////////////////////////////////

// 할당 연산자
// const x; // 오류가 발생한다.
// 이미 ㅁ선언된 변수에 할당
x = '';

// 변수를 선언 & 할당 => 초기화 (중요)
let y = ''; // ''

const obj = {};
obj.prop1 = '';
obj.prop2 = {};
obj.prop3 = [];
obj.prop4 = function () {}; 

obj; // {prop1: '', prop2: {}, prop3: [], prop: f () }

const arr = [];
arr[0] = 0;
arr[1] = 1;

////////////////////////////////////////

/**
 * 삼항 연산자
 * 3개의 피연산자, 조건 연산자
 */

const val = (조건) ? 참일때 : 거짓일때

let val2;

if (조건) {
    val2 = 참일때;
} else {
    val2 = 거짓일때;
}

// 중첩
const age = 20;
const isAdult = age >= 20 ? '성인' : '미성년자';

isAdult; // '성인'

////////////////////////////////////////

/**
 * 비교 연산자
 */

// 이상 / 초과;
// 이하 / 미만;
// 대상 < 비교할 값;

const age2 = 20;
// age가 10미만일 때
if (age2 < 10) {
}
// age가 10초과일 때
if (age2 > 10) {
}
// age가 10이상일 때
if (age2 >= 10) {
}
// age가 10이하일 때
if (age2 <= 10) {
}

////////////////////////////////////////

/**
 * typeof
 * primitive => string, number, bigint, boolean, underfined, symbol, null
 */

const str = 'string';
const fun = function(){}

typeof 'string'; // 'string'
typeof '123'; // 'number'
typeof '1n'; // 'bigint'
typeof 'true'; // 'boolean'
typeof Symbol(); // 'symbol'
typeof undefined; // 'undefined'
typeof func; // 'function'
typeof []; // 'object'
typeof {}; // 'object'
typeof null; // 'object' , JS 초기 설계 오류이다.

////////////////////////////////////////

/**
 * instanceof
 * 객체의 인스턴스가 어떤 생성자로 생성된 것인지
 * {} instanceof Object
 */

const obj = {}; 
const arr = [];
const func = function(){};

obj instanceof Object; // true
arr instanceof Object // true
func instanceof Function // true
func instanceof Object // true
new Date() instanceof Object; // true

undefined instanceof Object // false
null instanceof Object; // false, null => 원시값

////////////////////////////////////////

/**
 * 기타 연산자
 * 쉼표
 * void
 */

// 기타 연산자
123456, 'ABC', false; // false, 모두 평가를 하고 오른쪽 것을 반환한다.

let test = (123456, 'ABC'); 
test; // 'ABC'

// 표현식 결과를 버릴 때
void 1; // undefined
void 0; // undefined
void 10 + 10; // Nan
void (10 + 10); // undefined

//typescript
// const test: string = '문자열';
// const test2: number = 123; 

// function voidFunction (): void { // 반환하는 것이 없을때 void를 붙인다.
function voidFunction();{}
voidFunction(); // undefined




////////////////////////////////////////

/**
 * # 
 */