// 명령과 흐름을 제어할수 있는 문(statement)

// if (10>1){
//     return '10은 1보다 크다'
// } else if (10 === 10) {
//     return '10은 10과 같다'
// } else {
//     return '잘 모르겠다.'
// }

// 초기화; 평가(참=> 실행, 거짓 => 다음으로); 
const array = [1,2,3]

// case1
// for(let i = 0; i<array.length;i++){
//     const element = array[i];
//     // console.log(element);
//     console.log(array[0]);
// }

// case2
if (array.length === 3) {
    for(let i=0;i<array.length;i++){
        if(array[i]===1) {
            console.log(array[i]);
        }
    }
}