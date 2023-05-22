/**
 * 문자열에 접근
 */

const str = 'ABC';
str.charAt(2); // 'C'

str[2] // 'C'

// const str2 '  ABC      ';
str.trim(); // 'ABC' 공백을 지워준다.

const paragraph =
  'The quick brown fox jumpms over the lazy\
  dog. If the dog barked, was it really\
  lazy?';

const searchTerm = 'dog';
paragraph.includes(searchTerm); // true

paragraph.indexOf(searchTerm); // 만약 paragraph 안에 없으면, 없기 때문에 -1, 만약에 있으면 40번째 자리로 표현된다.
paragraph[40]; // 'd'
paragraph[41]; // 'o'
paragraph[42]; // 'g'

