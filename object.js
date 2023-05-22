/**
 * 
 * JS Type
 * - 원시(Primitive)
 * - 객체, 참조(Reference)
 */

const object = {
  name: 'jang',
  age: 11,
  arr: [],
  func: function() {},
  child: {}
}

const obj = {
  str: 'string'
}
obj.str.toUpperCase()

const arr = [1,2,3]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr[3] = 1000

const array = [];
function func() {}

console.log(object instanceof Object);
console.log(func instanceof Function);
console.log(array instanceof Array);

////////////////////////////////////////////

let variable; // 선언
const initValue = null // null을 지정

console.log(!undefined === !null); // true
console.log(!!undefined); // false

console.log(!null); // true
console.log(!!null); // false

console.log(!undefined === !null); // true
console.log(!!null === !!undefined); // true

console.log(Number(undefined)); // Nan
console.log(Number(null)); // 0

console.log(Number(undefined === null)); // false
console.log(Number(undefined === !null)); // true

///////////////////////////////////////////////

// 원시값의 래퍼 객체
const bool = false;
const num = 123;
const str = 'string';

const bool2 = new Boolean(false)
const num2 = new Number(123);
const str2 = new String('string');

console.log(typeof boo1); // boolean
console.log(typeof bool2); // object
console.log(bool2 instanceof Boolean); // true
console.log(str2 instanceof String); // true
console.log('string' instanceof String); // false

// const bool2 = new Boolean(false).valueOf()
// const num2 = new Number(123).valueOf()
// const str2 = new String('string').valueOf()

const obj2 = {
  name: 'jang',
  greeting : function() {
    return 'hello ' + this.name
  }
}

console.log(obj.greeting()) // hello jang
console.log(str.toUpperCase()); // STRING

///////////////////////////////////////////////

/**
 * 암시적 & 명시적
 */

// !! => Boolean
// Number(값) String(값) Boolean(값), Array.from() -> (값)이 왼쪽에 원하는 값으로 바뀜, 명시적 형 변환

// 암시적 사례
const result1 = 1 + '입니다'
console.log(typeof result1) // string이 더 우선순위이기 떄문에 string 이다.

const result2 = '11' +11 // 문자열이 숫자로 되어 서로 붙어 버렸다.
console.log(typeof result2) // 숫자가 문자열과 합치면 문자열이 되는 것을 알 수 있다.

const result3 = '2' * '2'
const result4 = ['111'] + 111
console.log(typeof result4) // string

// 명시적 사럐

const result5 = String(1) + '입니다' 
const result6 = Number('11') + 11
const result7 = Number('5') + 3
const result8 = Number(String(['111'])) + 111 // 222

///////////////////////////////////////////////

/**
 * - Boolean
 * ON: True
 * OFF : False
 */

console.log(Boolean('STRING')) // true
console.log(!!'STRING'); // true
console.log(!!0); // false
console.log(!!1); // true 

///////////////////////////////////////////////

/**
 * - Logical Operator( 논리 연산자 )
 * OR - ||
 * AND - &&
 * NOT - !
 */

function getName (firstName, lastName) {
  const fName = firstName === undefined ? '성 없음' : firstName;
  const lName = lastName === undefined ? '이름 없음' : lastName;

  console.log(!!undefined) // false
  console.log(!!'이름 없음'); // true
  console.log(!!undefined || !!'이름 없음'); // true

  
  return '저는 ' + fName + ' ' + lName + '입니다';
}

console.log(getName('장', )); // 저는 장 이름 없음입니다

///////////////////////////////////////////////

/**
 * == vs === (비교 연산자)
 * 동일
 * 동일 연산자
 * 일치 연산자
 * equality
 */

// == -> 느슨한 비교
// === -> 엄격한 비교

console.log('1' === 1) // false
console.log(Number('1') === 1) // true

console.log(0 == []) // true
console.log(0 == '') // true
console.log('' == []) // true

console.log(0 === []) // false
console.log(0 === '') // false
console.log('' === []) // false

///////////////////////////////////////////////

/**
 * Truthy
 */

if (true) {
  console.log('참 입니다');
}

if ({}) {
  console.log('참 입니다');
}

if ([]) {
  console.log('참 입니다');
}

if (42) {
  console.log('참 입니다');
}

if ("0") {
  console.log('참 입니다');
}

if ("false") {
  console.log('참 입니다');
}

if (new Data()) {
  console.log('참 입니다');
}

if (-42) {
  console.log('참 입니다');
}

if (12n) {
  console.log('참 입니다');
}
if (3.14) {
  console.log('참 입니다');
}
if (-3.14) {
  console.log('참 입니다');
}
if (Infinity) {
  console.log('참 입니다');
}
if (-Infinity) {
  console.log('참 입니다');
}


///////////////////////////////////////////////

/**
 * falsy
 */

if(false){} else {실행}
if(null){} else {실행}
if(undefined){} else {실행} 
if(0){} else {실행} 
if(-0){} else {실행} 
if(0n){} else {실행} 
if(Nan){} else {실행} 
if(''){} else {실행} 

const emptyString = '' // false
!emptyString // true

if (!emptyString) {
  '문자열이 비어있음'
}

///////////////////////////////////////////////

/**
 * 숫자 리터럴
 */

Number.MAX_SAFE_INTEGER // 9007199254740991
10 // 10
2 // 2
5e2 // 500
0xFF // 255
3.141 // 3.141
Number.isNaN() // false

const num22 = 123.111
num22.toFixed() // '123'

///////////////////////////////////////////////

/**
 * 숫자로 변환
 */

Number(undefined) // Nan
Number(null) // 0
Number('') // 0
Number('String') // Nan
Number(true) // 1
Number(false) // 0
Number(3.141592) // 3.141592

if (1 == true) {
  '참!!'
} // 참!!

+true // 1
console.log(+false) // 0

const strNumber = '1111'

if (Number(strNumber)){
  "실행"
} // '실행'

///////////////////////////////////////////////

/**
 * - Not a number(Nan)
 * -Nan
 * -Number.Nan
 */

Number(undefined); // NaN
parseInt('숫자로 변환 불가능한 문자열'); // NaN
Math.log(-1); // NaN
10+Nan; // NaN
'가나라다' / 10; // NaN

///////////////////////////////////////////////

/**
 * 
 * Infinity
 * 너무 크거나 작다
 * 지수 1023까지만 허용
 */

Math.pow(2,1024) // Infinity -> 오류는 아니다.
7 / 0 // Infinity -> 오류는 아니다.

const result = isFinite(Math.pow(2, 1024));
console.log(result); // false

isFinite(Infinity); // false
isFinite(Nan); // false
isFinite(19); // false

///////////////////////////////////////////////

