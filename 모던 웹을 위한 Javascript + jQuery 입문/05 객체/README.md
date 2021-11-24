> __2021-11-24__ <br/>
> # __`객체`__
<br>

## 1. 객체
Map과 유사하다. 다른점은 객체 안에는 함수든 기본적인 자료형은 모두 넣을 수 있다.<br><br>


## 2. 객체와 반복문
```
var product = {
    name : "Microsoft Visual Studio 2012 Ultimate",
    price : '15,000,000원',
    language : '한국어'
}

// 출력
var output = '';
for(var key in product){
    output += '* ' + key + " : " + product[key] + "\n";
}
alert(output);      /* * name : Microsoft Visual Studio 2012 Ultimate
                       * price : 15,000,000원
                       * language : 한국어                               */
```
for in 반복문에 객체를 넣으면 객체의 요소 개수만큼 반복문을 실행한다.

<br><br>

## 3. 객체 관련 키워드
### 3-1. in 키워드
in키워드를 for 키워드와 별도로 사용하면 해당 키가 객체 안에 있는지 확인할 수 있다.
```
var output = "";
var product = {
    name : "Microsoft Visual Studio 2012 Ultimate",
    price : '15,000,000원',
    language : '한국어'
}
// in 키워드 사용
output += "'이름' in product: " + ('name' in product) + "\n";
output += "'가격' in product: " + ('price' in product) + "\n";

/* 이름 in product : Microsoft Visual Studio 2012 Ultimate
   가격 in product : 15,000,000원                                       */
```

<br><br>

### 3-1. with 키워드
with 키워드는 복잡하게 사용해야 하는 코드를 짧게 줄여주는 키워드이다.
```
var product = {
  name : "Microsoft Visual Studio 2012 Ultimate",
  price : '15,000,000원',
  language : '한국어',
  one : 1,
  two : 2,
  three : 3
}

var output = "";
with(product){
  output += "이름 : " + name + "\n";
  output += "가격 : " + price + "\n";
  output += "총점 : " + (one + two + three) + "\n";
}
console.log(output);

/*
이름 : Microsoft Visual Studio 2012 Ultimate
가격 : 15,000,000원
총점 : 6
*/
```

 __NOTE.__
with 키워드 사용시 변수 이름 충돌<br>
만약 with 키워드를 사용하는 객체의 속성 이름과 외부 변수의 이름이 같으면 충돌이 발생한다. 이를 해결하기위해 window객체를 사용하면된다.<br>
```
var output = "";
with(student){
    window.output += "이름 : " + 이름 + "\n";
    window.output += "학년 : " + 학년 + "\n";
}
```
window 객체는 자바스크립트 최상위에 위치한 객체이다. 자바스크립트의 모든 변수와 함수는 window 객체의 속성과 매서드이다. alert()함수도 window.alert()로 동일하게 사용할 수 있다.

<br><br>

## 4. 객체의 속성 추가와 제거
### 4-1 속성추가
> 동적으로 속성 추가
```
var student = {};
student.name = "홍길동";
student.age = "25";
```

<br>

> 동적으로 메서드 추가
```
var student = {};
student.name = "홍길동";
student.age = "25";

student.toString = function(){
    var output = "";
    for(var key in this){
        if(key != "toString"){
            output += key + "\t" + this[key] + "\n";
        }
    }
    return output;
}

console.log(student.toString());

/*
name	홍길동
age	25
*/
```
<br><br>
### 4-2 속성 제거
```
var student = {};
student.name = "홍길동";
student.age = "25";

student.toString = function(){
    var output = "";
    for(var key in this){
        if(key != "toString"){
            output += key + "\t" + this[key] + "\n";
        }
    }
    return output;
}

console.log(student.toString());

delete(student.age);

//toString을 직접 호출하지 않아도 호출됨
console.log(student);

/*
name	홍길동
age	25

name	홍길동
*/
```

<br><br>

## 객체와 배열을 사용한 데이터 관리
```
function makeStudentInfo(name, age, korean, math, english){
  var result = {
      이름 : name,
      나이 : age,
      국어 : korean,
      수학 : math,
      영어 : english,
      getSum : function(){
          return this.국어 + this.수학 + this.영어;
      },
      getAverage : function(){
          return this.getSum() / 3;
      },
      toString : function(){
          return this.이름 + "\t" + this.getSum() + "\t\t" + this.getAverage();
      }
  };
  return result;
}

var arr = [];
arr.push(makeStudentInfo("홍길동", "25", 50, 50, 50));
arr.push(makeStudentInfo("홍동길", "26", 20, 100, 90));

var output = "이름\t총점\t평균\n"
for(var i in arr){
  output += arr[i].toString() + "\n";
}

console.log(output);

/*
이름	총점	평균
홍길동	150		50
홍동길	210		70
*/
```
