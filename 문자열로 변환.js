/**
 * 문자열로 변환
 */

String(123); // '123
String(undefined); // 'undefined'
String(null); //'null'
String({}); // '[objecrt object]'
String({ name :  'jang'}); // '[objecrt object]'
String([1,2,3]); // '1,2,3'

// 무조건 쓸 필요없고 원시값으로 변환할 때 쓰는 것이다.
JSON.stringify([1,2,3]); // '[1,2,3]'
JSON.stringify({name : 'jang'}); // {"name" : "jang"}

['1', 123].toString(); // '1,123'

String(true); // 'true'
Boolean('false'); // true
Boolean(String('false')); // true

