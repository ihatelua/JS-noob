> __2021-11-25__ <br/>
> # __`기본 내장 객체`__
<br>

## 1. 기본 자료형 속성이나 매서드 추가
```javascript
var ObjectNumber = new Number(273);

// 메서드 추가
Number.prototype.method = function(){
    return 'Method on Prototype';
}

// 메서드 실행
console.log(ObjectNumber.method()); 
```
기본자료형에서 속성이나 매서드를 추가하고싶다면 프로토타입으로 추가를 하면 된다.

<br><br><br>

## 2. Object 객체
### 2-1. 생성
```javascript
var object = new Object();
```

<br><br>

### 2-2. 속성과 메서드
|메서드 이름|설명|
|----------|----|
|constructor()|객체의 생성자 함수를 나타낸다.|
|hasOwnProperty(name)|객체가 name 속성이 있는지 확인|
|isPrototypeof(object)|객체과 object의 프로토타입인지 확인|
|propertyIsEnumerable(name)|반복문으로 열거할 수 있는지 확인|
|toLocaleString()|객체를 호스트 환경에 맞는 언어의 문자열로 바꿈|
|toString()|객체를 문자열로 바꿈|
|valueOf()|객체의 값을 나타냄|

<br><br><br>

## 3. Number 객체
|메서드 이름|설명|
|----------|----|
|toExponential()|숫자를 지수 표시로 나타낸 문자열을 리턴|
|toFixed()|숫자를 고정 소수점 표시로 나타낸 문자열을 리턴|
|toPrecision()|숫자의 길이에 따라 지수 표시 또는 고정 소수점 표시로 나타낸 문자열를 리턴|

<br><br><br>



## 4. ES5 Array 객체
### 4-1. 반복메서드(forEach)
|메서드 이름|설명|
|----------|----|
|forEach()|배열의 각각의 요소를 사용해 특정 함수를 for in 반복문처럼 실행|
|map()|기존의 배열에 특정 규칙을 적용해 새로운 배열을 만듬|

<br>

```javascript
var array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
var output = ' ' ;

array.forEach(function (element, index, array) {
    sum += element;
    output += index + " : " + element + " -> " + sum + "\n"; 
});

console.log(output);

/*
 0 : 1 -> 1
1 : 2 -> 3
2 : 3 -> 6
3 : 4 -> 10
4 : 5 -> 15
5 : 6 -> 21
6 : 7 -> 28
7 : 8 -> 36
8 : 9 -> 45
9 : 10 -> 55
*/
```
매개변수로 입력 함수에 배열의 요소와 관련된 정보를 넣어 반복한다.

<br><br>

### 4-2. 반복메서드(map)
```javascript
var array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var output = array.map(function (element) {
    return element + element;
});

console.log(output);

/*
Array(10) = {
    0: 2  ,
    1: 4  ,
    2: 6  ,
    3: 8  ,
    4: 10 ,
    5: 12 ,
    6: 14 ,
    7: 16 ,
    8: 18 ,
    9: 20 
}
*/
```




