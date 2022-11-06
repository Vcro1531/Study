# 변수와 상수

---

> **var**는 이제 쓰지 않습니다.

## 변수 :

- 바뀔 수 있는 값을 말하며, 이미 값을 선언한 상태에서도 바꿀 수 있다.

  ```javascript
  let value = 1;
  console.log(value); //1
  value = 2;
  console.log(value); //2
  ```

  - 주의할 점 : 한번 선언한 변수는 똑같은 이름으로 다시 선언할 수 없다.

    ```javascript
    let value = 1;
    let value = 2;

    // Error :Indentifier 'value' has already been decleared
    ```

## 상수 :

- 한번 선언한 후 값이 바뀌지 않습니다.

  ```javascript
  const a = 1;
  a = 2;

  //Error : "a" is read-only
  ```

- 마찬가지로 한번 선언한 변수는 똑같은 이름으로 다시 선언할 수 없습니다.

  ```javascript
  const a = 1;
  const a = 2;

  // Error :Indentifier 'value' has already been decleared
  ```
