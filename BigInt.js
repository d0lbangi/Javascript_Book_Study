/**
 * Bigint
 * 
 * 안정적인 범위의 정수
 */

console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991, undefined

console.log(12391710265981629569182561231);
console.log(12391710265981629569182561231n);
BigInt(12391710265981629569182561231n);

// BigIntms Number와 일치하지 않지만 동등합니다.
0n === 0 // false
0n == 0 // true