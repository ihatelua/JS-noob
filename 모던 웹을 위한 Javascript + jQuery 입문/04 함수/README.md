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
내부함수에서 외부함수의 변수인 num을 접근하는것이다. 그렇다고 num의 값을 바꿀 수 없다. 하나의 은닉화를 만든것이다. <br><br>

ㅣlecture01 과 lecture02 를 보면 쉽게 이해할 수 있다.



  






















