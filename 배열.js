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
