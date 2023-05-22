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

