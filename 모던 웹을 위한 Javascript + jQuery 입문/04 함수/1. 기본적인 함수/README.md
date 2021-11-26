> __2021-11-14__ <br/>
> # __`기본적인 함수`__
<br>

## 1. 익명함수
함수지만 이름이 없는 함수를 익명함수라고 부른다.
```javascript
var 함수 = function(){}
```

<br>

## 2. 가변 인자 함수
가변 인자 함수는 매개변수의 개수가 변할 수 있는 함수이다. 매개변수를 선언하지 않아도 함수에는 기본적으로 가변 인자 함수(arguments) 라는 것을 가지고 있다.
```javascript
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
```javascript
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
