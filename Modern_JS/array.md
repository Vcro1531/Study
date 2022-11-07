# 배열

---

## 배열 :

- 여러개의 항목들이 들어있는 리스트

- 배열을 선언할 때는 **[ ]** 기호 안에 감싸야 한다.

- 배열 안에는 어떤 값이든 들어갈 수 있다.

  - 객체 배열

    ```javascript
    const objects = [{ name: "멍멍이" }, { name: "야옹이" }];
    ```

  - 숫자 배열

    ```javascript
    const array = [1, 2, 3, 4, 5];
    ```

- 배열을 선언한 후, n번째 항목을 조회하고 싶을 때

  ```javascript
  objects[n];
  ```

  ```javascript
  const objects = [{ name: "멍멍이" }, { name: "야옹이" }];

  console.log(objects); // [ { name: '멍멍이' }, { name: '야옹이' } ]
  console.log(objects[0]); // { name: '멍멍이' }
  console.log(objects[1]); // { name: '야옹이' }
  ```

---

## 배열에 새 항목 추가하기 :

- 내장 함수인 **push** 함수를 사용한다.

  ```javascript
  const objects = [{ name: "멍멍이" }, { name: "야옹이" }];

  objects.push({
    name: "멍뭉이",
  });

  console.log(objects); // [ { name: '멍멍이' }, { name: '야옹이' }, { name: '멍뭉이' } ]
  ```

---

## 배열의 크기 알아내기 :

- 배열의 **length** 값으로 확인할 수 있다.

  ```javascript
  const objects = [{ name: "멍멍이" }, { name: "야옹이" }];

  console.log(objects.length); // 2

  objects.push({
    name: "멍뭉이",
  });

  console.log(objects.length); // 3
  ```
