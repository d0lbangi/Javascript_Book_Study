// 함수 선언문

// function func(num) {
//     if (10 > num) {
//         return 'Hello';
//     }   
// }

// console.log(func(1)); // Hello

function sum(num1, num2, num3, num4) {
    return num1 + num2+ num3+ num4;
}

function multiple(num1, num2) {
    return num1 * num2;
}

console.log(sum(1,2,3,4));
console.log(multiple(1,2));

/////////////////////////////////////////////////

// 함수 선언문
function sum(param1, param2) {
    return param1 + param2
}

const obj = {
    // 메서드
    prop: function() {
    }
}


// 생성자 함수
function Myobj() {

}

// 화살표 함수 (ES2015+, ES6)
const arrowFunc = () => {}
sum(1,2);

/////////////////////////////////////////////////

/**
 * 함수 표현식
 */

function func() {
    return 'param1' + 'param2';
}

function func(param1, param2) {
    return param1 + param2
}

console.log(func(1,2)) // 3, 마지막 함수가 실행되는 문제, 호이스팅이 발생한다.

// 함수 표현식 + 기명 함수
const func = function  func() {
    return 'func'
}

// 익명 함수 표현식
const func = function() {
    return 'func';
}

console.log(func()) // func , 중복 선언이나 호이스팅에 대한 문제를 해결할 수 있다.

/////////////////////////////////////////////////

/**
 * 화살표 함수
 */

// 함수 선언
function name(params) {

}

// 메소드 
const obj4 = {
    func: function() {

    }
}

// 생성자 함수
function NewFunc() {

}

// 함수 표현식
const func = function() {

}

// 화살표 함수1
const arrowFunc = () => { // 함수의 바디를 만들 수 있다.
    if () {

    }

    for (let index=0; index < array.length; index++){
        const element = array[index];
    }
    return ''
}

// 화살표 함수2 - 가볍다
const arrowFunc2 = () => {
    1. arguments
    2. this
    return '문자열'
}


/////////////////////////////////////////////////

/**
 * 매게변수와 인자 다루기
 */

function func(params) { // 매게변수는 지역변수로 사용할 수 있다.
    params = params + 10
    return params
}

const result = func(1);
console.log(func(result));


function func(objP) {
    const p1 = objp.p1
    const p2 = objp.p2
    const p3 = objp.p3
    const p4 = objp.p4
    
    console.log(p2, p4);
    return 
}

const obj2 = {
    p2 : 'p2',
    p4 : 'p4',
};

const result2 = func(obj);
console.log(result2);



function func({p1,p2,p3,p4}) {
    console.log(p2, p4);
    return
}

const result3 = func({
    p2: 'p2',
    p4: 'p4',
})

console.log(result3);


/////////////////////////////////////////////////

/**
 * arguments
 * 화살표 함수에는 존재하지 않는다.
 */

function func() {
    return arguments[0]
}
console.log(func(1)); // 1

const func = () => { // 화살표함수에는 argument 객체가 없기 때문에 아무것도 안 뜬다.
    return arguments[0]
}
console.log(func(1)); // {}

const func = function(){
    const convertArr = Array.from(arguments);
    return convertArr.reduce(prev, curr) => prev + curr
}

console.log(func(1,2,3,4,5,6,7)); // 28

/////////////////////////////////////////////////

/**
 * rest parameter
 */

const func = (first, second, ...nums) => {
    
    console.log(first);  // 1
    console.log(second); // 2
    console.log(nums);   // true

    return nums.reduce((prev, curr) => prev+curr);
}
console.log(func(1,2,3,4,5,6,7)); // 25