# 객체

---

> 📌 자바스크립트에서는 일반적으로 **객체 안에** 프로퍼티로 정의된 **함수**를 메서드라고 부른다.

## 객체 :

- 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해준다.

  ```javascript
  const dog = {
    name: "멍멍이",
    age: 2,
  };

  console.log(dog.name); //멍멍이
  console.log(dog.age); //2
  ```

- 객체를 선언할 때는 { } 문자 안에 원하는 값들을 넣는다.

  ```javascript
  const sample = {
    test1: "테스트1",
    test2: "테스트2",
  };

  console.log(sample); // { test1: '테스트1', test2: '테스트2' }
  console.log(sample.test1); // 테스트1
  console.log(sample.test2); // 테스트2
  ```

  ***

## 함수에서 객체를 파라미터로 받기 :

```javascript
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

print(ironMan); //아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
print(captainAmerica); //캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.
```

---

## 객체 비구조화 할당 :

```javascript
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function print(hero) {
  const { alias, name, actor } = hero; // 이 코드가 객체에서 값들을 추출해서 새로운 상수로 선언
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```

---

## 파라미터 단계에서 객체 비구조화 할당 :

```javascript
const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```

---

## 객체 안에서 Getter & Setter 함수

- Getter 함수와 Setter 함수를 사용하게 되면 특정 값을 바꾸려고 하거나, 특정 값을 조회하려고 할 때 우리가 원하는 코드를 실행 시킬 수 있다.

  ```javascript
  const numbers = {
    a: 1,
    b: 2,
    get sum() {
      console.log("sum 함수가 실행됩니다.");
      return this.a + this.b;
    },
  };

  console.log(numbers.sum);
  // sum 함수가 실행됩니다.
  // 3
  numbers.b = 5;
  console.log(numbers.sum);
  // sum 함수가 실행됩니다.
  // 6
  ```

  - `numbers.sum()` 을 한 것이 아니라 `number.sum` 을 조회했을 뿐인데, 함수가 실행되고 그 결과값이 출력되었다.

    이런식으로 Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환한다.

- Setter 함수를 설정 할 때에는 함수의 앞부분에 `set` 키워드를 붙인다.

  ```javascript
  const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
      console.log("calculate");
      this.sum = this._a + this._b;
    },
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
    set a(value) {
      console.log("a가 바뀝니다.");
      this._a = value;
      this.calculate();
    },
    set b(value) {
      console.log("b가 바뀝니다.");
      this._b = value;
      this.calculate();
    },
  };

  console.log(numbers.sum);
  numbers.a = 5;
  numbers.b = 7;
  numbers.a = 9;
  console.log(numbers.sum);
  console.log(numbers.sum);
  console.log(numbers.sum);
  ```

> Getter & Setter 에 대한 설명글 : https://mygumi.tistory.com/161
