/**
 * Template Literals
 * 1. 멀티라인 (개행)이 자유로움
 * 2. Basic String Formatting => 보건법을 활용 => 표현식을 문자열 포함 가능
 * 3. HTML Escaping : 안전하게 사용하도록 도움 (XSS, SQL, Injection)
 * 
 */

const multiLine = 'first Line \n last line';

// ES2015+
function genHello(name) {
  return `안녕하세요
  ${name}
  님
  반갑습니다`;
}

genHello('Jang');

// '안녕하세요
// Jang
// 님
// 반갑습니다'

function genDivision(innerText) {
  return `<div>${innerText</div>`;
}

const divTag = genDivision('Jang');
body.innerHTML = divTag;