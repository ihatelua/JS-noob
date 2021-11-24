> __2021-11-24__ <br/>
> # __`생성자 함수`__
<br>

## 1. 생성자 함수 개요
```
function Student(){

}
var student = new Student();
```
student는 객체 또는 인스턴스,
Student는 생성자함수라고 부른다.

<br><br>

 __NOTE.__
Instanceof 키워드<br>
Student 생성자 함수로 student 객체를 생성할때, 생성자 함수로 만들어진 객체를 인스턴스라고 부른다고했다.<br>
이 객체가 어떠한 생성자 함수로 생성됐는지 확인할 때는 instanceof 키워드를 사용하여 확인한다.<br>
```
function Student(){

}
var student = new Student();
console.log(student instanceof Student);
console.log(student instanceof Number);
console.log(student instanceof String);

/*
true
false
false
*/
```

<br><br>

## 2. 프로토타입

| 객체구조 | 프로톼타입을 사용한 객체구조 |
|:-------:|:--------------------------:|
|![ex_screenshot](1.png){: width="50%" height="50%"}|![ex_screenshot](2.png){: width="50%" height="50%"}|
