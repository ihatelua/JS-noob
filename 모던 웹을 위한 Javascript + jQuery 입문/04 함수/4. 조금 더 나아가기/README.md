> __2021-11-27__ <br/>
> # __`조금 더 나아가기`__
<br>

## 1. 반복문과 콜백 함수

> __자바스크립트의 실행순서와 관련된 문제__
<br>
```javascript
for(var i=0; i<3; i++){
    setTimeout(function(){
        console.log(i + " ");
    }, 0);
}
/*
3 3 3
*/
```
동기식으로 반복문이 모두 끝난 시점의 i값으로만 출력된다.
이 문제를 해결하기 위해서는 클로저를 사용하면 된다.

<br><br>

> __클로저를 활용한 해결__
```javascript
for(var i=0; i<3; i++){
    (function(closer_i){
        setTimeout(function(){
            console.log(i + " ");
        }, 0);
    })(i);
}
/*
1 2 3
*/
```

<br>

> __forEach() 메서드를 활용한 클로저 생성__
```javascript
[0,1,2].forEach(function(i){
    setTimeout(function(){
        console.log(i + " ");
    }, 0);
});
/*
1 2 3
*/
```
forEach() 또한 함수 내부에서 클로저가 만들어지므로 정상적으로 실행된다.


<br><br>

## 2. 기본 매개변수(ES6)
ES6부터는 기본 매개변수를 쉽게 만들 수 있는 문법을 제공한다.

```javascript
function test(a, b=52, c = 273){
    console.log(a + "." + b + "." + "c");
}
test(1,2);
/*
1.2.273
*/
```
매개변수를 입력하지않으면 함수초기에 입력된 값이 초기값이 된다. a와 b의 값은 함수를 호출할 때 지정되었으므로 지정된 값을 그대로 가져가는것이고, c는 지정이 안되었기때문에 함수초기에 지정된 값을 가져오는것이다.

<br><br>

### 2-1. 화살표 함수
ES6부터는 기존의 코드를 더 쉽게 사용할 수 있는 문법의 추가가 되었다. 그 대표적인 예는 화살표 함수이다. 화살표함수를 사용할 때 주의할 점은 this 이다.<br>
* 익명함수 : 함수 자체에 바인딩되어 있는 객체
* 화살표함수 : 전역 객체(웹브라우저 환경에서는 window 객체)

```javascript
const multiply = (a, b) => a + b;
console.log(multiply(1, 2));
/*
3
*/
```

<br><br>

### 2-2. 전개 연산자
전개 연산자는 가변 매개변수 함수를 만들 때 사용한다. arguments 객체를 사용할때 편리하게 호출할 수 있다.
```javascript
function test(a, b, ...number){
    console.log(a + ", " + b + ", ");
    console.log(number[0] + ", " + number[1]);
    console.log(number);
}
test(1,2,3,4,5,6)
/*
1, 2
3, 4
[3,4,5,6]
*/
```

<br><br>

### 2-3. 함수를 호출할때 전개 연산자
일반적으로 배열의 요소를 하나하나 매개변수를 넣고 호출하고 싶을 때 사용된다.
```javascript
function test(a,b,c,d){
    console.log(`${a}:${b}:${c}:${d}`); // 1:2:3:4
}
var arr = [1,2,3,4];
test(...arr);
```
이렇게 선언하면 코드가 굉장히 단순해진다.

















