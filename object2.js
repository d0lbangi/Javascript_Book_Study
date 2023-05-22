/**
 * 객체 생성
 */

const { prototype } = require("module");

// 싱글 리터럴 객체 
const object = {
  property : 'value',
  method: function() {
    // 이 객체의 속성, 프로퍼티가 값을 함수로 가질 때 메소드라고 한다.
  }
  // key, property : value
};

object // { property: 'value', method: [ : method]}

// PascalCase, 생성자 함수
function NewObject(name) {
  this.name = name;
}

const newObject = new NewObject('jang') // NewObject { name: 'jang'}




// const newObject2 = Object.create(프로토타입, 객체 서술자(기술자));
const newObject2 = Object.create(
  Object.prototype, 
  {
    name: {
      value: 'jang',
      writeable: true, // 덮어쓸 수 있는 지
      enumerable: true, // 열거할 수 있는 지
      configurable: true, // 객체 서술자를 수정할 수 있는 지
    },
  },
);

newObject2.name = 'kim'
newObject2 // { name : 'kim'} if writeable is set as true
newObject2 // { name : 'jang'} if writeable is set as false

for (const key in newObject2) {
  console.log(key);
}

newObject2; // {} if enumerable is set as false
newObject2; // { name : 'kim'} if enumerable is set as true


//////////////////////////////////////////

/**
 * 프로퍼티 열거
 */

const obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4',
};

const prop1 = 'prop1'
obj.prop1
obj[prop1] // 표현식처럼 이용 가능하다. for문으로 이용가능하다

for (const key in obj) { // 좌측에는 값 변수인 키가 들어오고 우측은 열거될 대상의 객체가 들어온다. / 객체의 키를 열거한다.
  if (obj.hasOwnProperty(key)){ // key가 이 객체를 가지고 있는게 맞느냐
  console.log(obj[key]); // value1, value2, value3, value4
  }
}


// chaining
{
  let val = 1;
  {
    let val = 4;
    {
      let val = 10
      {
        console.log(val)
      }
    }
  }
}

//////////////////////////////////////////

/**
 * 프로퍼티 조작
 */

const person = {
  firsName : 'park',
  location : 'Korea',
}

// 추가
person.lastName = 'hyeonseok';
// person.['lastName'] = 'hyeonseok';
// 수정
person.lastName = 'hyeon-seok';
person; //{ firstName: 'jang', location: 'korea', lastName: 'hyeon-seok'}

// 삭제
delete person.location;

person; //{ firstName: 'jang', lastName: 'hyeon-seok'}
  

//////////////////////////////////////////

/**
 * 프로퍼티 접근자
 */

const person = {
  _firstName: 'jang',
  lastName : 'hyeon-seok',

  get firstName() {
    return this._firstName.toUpperCase();
  },

  set firstName(newFirstName) {
      if (typeof newFirstName !== 'string'){
        this._firstName = 'undefined name';
    
      return;
    }

    this._firstName = newFirstName;
  },

  get fullName() {
    return (
      this._firstName + 
      ' ' +
      this.lastName + 
      ' ' + 
      '입니다'
    );
  },
};

person.firstName = 123432;
console.log(person.firstName); // UNDEFINEDNAME  

person.fullName; // jang hyeon-seok입니다



//////////////////////////////////////////

/**
 * object 인스턴스
 */

// 특정 공간의 메모리를 실제 고유한 객체 = 인스턴스 (생성자 함수, 싱글 리터럴 함수, ...)

const me = {
  name: 'jang',
  age: 10,
  location: 'korea',
}
const me2 = {
  name: 'jang',
  age: 10,
  location: 'korea',
}
const you = {
  name: 'seok',
  age: 20,
  location: 'germany',
}

console.log(me === me2); // false 
console.log(me === you); // false


//////////////////////////////////////////

/**
 * 생성자
 */

const me3 = {
  name: 'jang',
  age: 10,
  location: 'korea',
}

function Person(name, age, location) {
  // this: 생성될 인스턴스를 가리키는 것
  this.name = name;
  this.age = age; 
  this.location = location;

  this.getName = function() {
    return this.name + '입니다';
  };
}


const me4 = new Person('jang', 10, 'korea'); // Person {name: 'jang', age: 10, location: 'korea'}
const you2 = new Person('kim', 20, 'China'); // Person {name: 'kim', age: 20, location: 'China'}

me4.getName();
you2.getName(); // kim입니다
