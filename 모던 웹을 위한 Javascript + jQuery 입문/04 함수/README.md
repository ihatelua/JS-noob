> __2021-11-14__ <br/>
> # __`함수`__
<br>

## 1. 익명함수
함수지만 이름이 없는 함수를 익명함수라고 부른다.
```
var 함수 = function(){}
```

<br>

## 2. 가변 인자 함수
가변 인자 함수는 매개변수의 개수가 변할 수 있는 함수이다. 매개변수를 선언하지 않아도 함수에는 기본적으로 가변 인자 함수(arguments) 라는 것을 가지고 있다.
```
<script>
    function sumAll(){
        alert(typeof (arguments) + " : " + arguments.length);
    }
    sumAll(1,2,3,4,5,6,7,8,9);
</script>
```

<br>

## 3. 내부 함수
함수 내부에 함수를 선언할 수 있으며 함수외부에서는 내부함수를 사용할 수 없다.<br><br>

## 4. 함수를 리턴하는 함수
```
<script>
    // 함수를 생성한다.
    function returnFunction(){
        return function(){
            alert("Hello Function .. !");
        }
    }

    // 함수를 호출한다.
    returnFunction()();
</script>
```
returnFunction() 함수를 호출하면 함수가 리턴되므로 괄호를 한 번 더 사용하여 해당 함수를 호출할 수 있다.

<br><br>

## 5. 클로저
클로저는 함수와 렉시컬 환경의 조합이라고 한다. 쉽게 말해서 함수가 생성될 당시의 외부 변수를 기억하고 생성 이후에도 게속 접근가능하는걸 말한다.
```
<script>
   function MakeAdder(x){
        return function(y){
            return x + y;
        }
    }

    const add3 = MakeAdder(3); 
    console.log(add3(2));   // 5

    const add10 = MakeAdder(10);
    console.log(add10(5));  // 15
    console.log(add3(1));   // 4
</script>
```
add3 함수가 생성된 이후에도 상위함수인 makeAdder의 x에 접근가능하다. add10 에서 makeAdder(10) 을 선언하지만 add3에는 아무 변화가 없고, add3가 2번 실행되었기에 값이 1 증가한것을 볼 수 있다.<br><br>

```
<script>
   function MakeAdder(x){
        let num = 0;

        return function(){
            return num++;
        }
    }

    let counter = makeCounter();

    console.log(makeCounter()); // 0
    onsole.log(makeCounter());  // 1
    onsole.log(makeCounter());  // 2
</script>
```

내부함수에서 외부함수의 변수인 num을 접근하는것이다. 그렇다고 num의 값을 바꿀 수 없다. 하나의 은닉화를 만든것이다. <br>

예제를 보면 쉽게 이해할 수 있다.
<br><br>

이것이 가능한 이유는 가비지 컬렉터의 동작 방식을 알아야 한다. 가비지 컬렉터는 어떤 값을 참조하는 변수가 하나라도 있다면 그 값은 수집 대상에 포함시키지 않는다.<br><br>

위 코드에서 MakeAdder함수가 종료될때 내부함수를 반환한다. 외부함수가 종료되더라도 한번더 함수를 호출하면 외부함수의 변수가 필요할 지도 모르기때문에 값이 계속 유지되는 것이다.<br><br>

## 5-1 클로저 메모리 관리
클로저는 객체지향과 함수형을 모두 가지고 있는 자바스크립트에서 중요한 함수이다. '메모리 누수'라는 이유로 클로저 사용을 지양하는 사람도 있다. 하지만 '메모리 누수'는 개발자가 관리만 잘 해주면 문제없이 사용가능하다.<br><br>

'메모리 누수'란 어떤 값의 참조 카운트가 0이 되지 않아 가비지 콜렉터의 수거 대상이 되지 않을 때 사용하는 표현이다.<br><br>

'메모리 누수'는 아래와 같은 방법들로 메모리를 해제할 수 있다.<br><br>

__return 에 의한 클로저 메모리 해제__
```
let outer = (() => {
  let a = 1;
  const inner = () => {
    return ++a;
  };
  return inner;
})();

console.log(outer());
console.log(outer());
outer = null;
```

<br>


__setInterval에 의한 클로저의 메모리 해제__
```
(function () {
  let a = 0;
  let intervalId = null;
  let inner = () => {
    if (++a >= 10) {
      clearInterval(intervalId);
      inner = null;
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();
```

<br>

__eventListener에 의한 클로저의 메모리 해제__
```
(function () {
  let count = 0;
  let button = document.createElement('button');
  button.innerText = 'click';

  let clickHandler = () => {
    console.log(++count, 'times clicked');
    if (count >= 10) {
      button.removeEventListener('click', clickHandler);
      clickHandler = null;
    }
  };
  button.addEventListener('click', clickHandler);
  document.body.appendChild(butto);
})();
```

<br><br>



















