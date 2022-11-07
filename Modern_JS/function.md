# 함수

---

## 함수 :

- 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능

  ```javascript
  const a = 1;
  const b = 2;
  const sum = a + b;
  ```

  위 코드를 함수로 만들어보면

  ```javascript
  function add(a, b) {
    return a + b;
  }

  const sum = add(1, 2);
  console.log(sum);
  ```

- 함수를 만들 때는 **function** 키워드를 사용합니다.

- 함수 내부에서 **return** 키워드를 사용하여 함수의 결과물을 지정 가능합니다.

  - **return** 을 사용 하면 함수가 끝이 나며, **return** 아래의 코드는 실행되지 않습니다.

    ```javascript
    function add(a, b) {
      return a + b;
      console.log("호출이 되지 않는 코드!");
    }

    const sum = add(1, 2);
    console.log(sum);
    ```

## 화살표 함수 :

- **function** 키워드 대신 '**=>**' 문자를 사용하여 함수를 구현할 수 있다.

  ```javascript
  const add = (a, b) => {
    return a + b;
  };

  console.log(add(1, 2));
  ```

  - 위와 같이 바로 **return**을 하는 경우 생략할 수 있다.

    ```javascript
    const add = (a, b) => a + b;
    console.log(add(1, 2));
    ```
