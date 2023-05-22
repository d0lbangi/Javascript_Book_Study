function genHello() {
  return 123 + 'word';
}

genHello(); // '123word'


function genHello(name) {
  return '안녕하세요' + name + '님 반갑습니다..';
}

genHello(Jang); // 'Jang'

function genHello(name) {
  return '안녕하세요' + (name ? name : '이름없음') + '님 반갑습니다.';
}

genHello(Jang); // '안녕하세요 Jang님 반갑습니다.

function genHello(name) {
  const resultName = name || '이름없음';
  return '안녕하세요' + resultName + '님 반갑습니다';
}

genHello('Jang');