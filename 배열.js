const data = 'a'
const num = 0
const boolean = true

// 0...1...2...3...
const arr = [data, num, boolean, 'name']

arr[4] = 'Test'
arr[0] = '첫번째'
arr[1] = 'Second'

arr.push('마지막')
arr.unshift('첫번째 또 추가')

// console.log(arr)

for (let index=0;index<arr.length;index++){
    console.log(arr[index])
}

arr.forEach(element => {
    console.log(element);
});


// console.log(
//     arr.length
// )

// console.log(
//     arr[3]
// )

// console.log(
//     typeof arr
// )

////////////////////////////////////////

/**
 *  # 배열
 * 1. 객체
 * 2. index: value (딕셔너리)
 */

const arr = [1,2,3];
arr; // [1,2,3]

const arr2 = new Array(1,2,3);
arr2; // [1,2,3]

arr[0]; // 1
arr[1]; //2
arr[2]; // 2
arr[3] = 4; // 3
arr.push(5); // 5
arr[9] = 10; // 10

arr['prop'] = [6,7]; // [6,7] 
arr.prop; // [6,7]

////////////////////////////////////////

/**
 * # 배열의 length
 * 배열에서 가장 높은 인덱스를 추적
 */

// 배열이 어려운 이유 - 빈 공간도 다 하나의 요소로 포함시키기 때문이다.

const arr = [1,2,3];

arr[9] = undefined; // undefined

arr; // [1,2,3, <6 empty items>, undefined]

arr.length; // 10

arr.forEach(el => console.log(el)); // 1 2 3 undefined undefined


// 만약 강제적으로 length의 길이를 늘리면 늘리만큼 숫자가 늘어난다.
arr.length = 20;
arr.length; // 20
arr; // [1,2,3, <6 empty items>, undefined, <10 empty items>]

// 만약 길이를 줄어보면 비어져버렸다. => 불변값이 아니라 참조값이기 때문이다.
arr.length= 0; // 0
arr; // []

////////////////////////////////////////

/**
 *  # 배열 순회
 */

const arr = [1,2,3];


//case1
let i = 0;

if (i < arr.length) {
    console.log(arr[i])
    i++
}

//case2
for (let i = 0; i < arr.length; i++) { // let을 안 쓰면 i 는 전역변수가 되기 때문에 let i = 0; 으로 초기화 해줘야 한다.
    console.log(arr[i]); // 1, 2, 3
}


// while문
let j = 0;
while (j < arr.length){
    console.log(arr[j]);
    j += 1;
}

// for of, in 문, 자바스크립트 배열만 돌려야하는데 객체까지 돌릴 수 있으므로 사용할 필요도 없다. 사용할 필요가 없다.
for (const value of arr) {
    console.log(value); // 1,2,3
}

for (const index  in arr) {
    console.log(arr[index]); // 1,2,3
}


////////////////////////////////////////

/**
 * 배열 다루기
 */

const squidMembers = ['기훈', '상우', '일남', '준호', '새벽', '알리'];

// 배열의 끝에 요소 추가
squidMembers.push('덕수'); // 배열의 마지막 부분에 푸쉬로 넣을 수 있다. ['기훈', '상우', '일남', '준호', '새벽', '알리', '덕수']

// 배열의 앞에 요소 추가
squidMembers.unshift('미녀'); // ['미녀', '기훈', '상우', '일남', '준호', '새벽', '알리', '덕수'];

// 배열에서 요소의 인덱스 찾기. indexOf 인덱스의 위치를 알 수 있다.
squidMembers.indexOf('현석'); // -1
squidMembers.indexOf('상우'); // 2
squidMembers.lastIndexOf('상우'); // 2

// 배열에서 요소 포함 여부 확인
squidMembers.includes('상우');
squidMembers.includes('현석');

// 배열의 앞 요소 지우기
squidMembers.shift('미녀'); // unshift 반대

// 배열의 끝 요소 지우기
squidMembers.pop('덕수') // push 반대

// 배열에서 특정 인덱스 요소 지우기
squidMembers.splice(2, 1) // 2번째에서 하나를 지워준다. 어떤 것을 지웠는지도 알려준다.
squidMembers.splice(2, 3) // 2번째에서 3명을 지워준다. 어떤 것을 지웠는지도 알려준다.


squidMembers;


////////////////////////////////////////

/**
 * 유사 배열 객체(Array Like Object)
 */

// 배열처럼 생겼지만 배열처럼 사용할 수 없는 argument이다.

function func() {
    console.log(arguments)
    console.log([1,2].__proto__)
}

func(1,2,3,4,5,6)


// nodeList에 push method가 없다.
const nodeList = document.querySelector

function func() {
    console.log(Array.isArray(arguments)) // false
}

func(1,2,3,4,5,6) // undefined
Array.isArray([]) // true
Array.isArray(nodeList) // false

const converNodeList = Array.from(nodeList)
converNodeList.push('oh!')
// 7
converNodeList isArray()
