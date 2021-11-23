> __2021-11-20__ <br/>
> # __`내장 함수`__
<br>

## 1. 개요
자바스크립트는 자체적으로 몇 가지 함수를 제공한다. 기본으로 내장된 함수를 내장함수라고 부른다. 

<br><br>

## 2. 타이머 함수
타이머 함수는 특정 시간에 특정 함수를 실행할 수 있게 하는 함수이다.
| 메서드 이름  | 설명  |
| ----------- | ------ |
|setTimeout(function, millisecond)| 일정시간 후 함수를 한 번 실행한다.|
|setInterval(function, millisecond)| 일정 시간마다 함수를 반복해서 실행한다.|
|clearTimeout(id)| 일정 시간 후 함수를 한 번 실행하는 것을 중지시킨다.|
|clearInterval(id)| 일정 시간마다 함수를 반복하는 것을 중단한다.|

<br>

여기서 주의할 점은 setTimeout() 함수는 한 번만 실행하므로 특별히 주의할 사항은 없겠지만, setInterval() 함수는 지속적으로 실행하므로 컴퓨터의 자원을 지속적으로 소비시킨다.<br>

이러한 문제를 해결하기 위해 clearTimeout() 함수와 clearInterval() 함수를 사용하여 불필요한 메모리 소모를 막을 수 있다.<br><br><br>

## 3. 인코딩과 디코딩 함수
| 함수 이름  | 설명  |
| ----------- | ------ |
| escape()| 적절한 정도로 인코딩한다.|
| unescape()| 적절한 정도로 디코딩한다.|
| encodeURL(url)| 최소한의 문자만 인코딩한다.|
| decodeURL(url)| 최소한의 문자만 디코딩한다.|
| encodeURLComponent(urlComponent)| 문자 대부분을 모두 인코딩한다.|
| decodeURLComponent(urlComponent)| 문자 대부분을 모두 디코딩한다.|

<br>

> __NOTE.__
인코딩과 디코딩<br>
인코딩은 문자를 컴퓨터에 저장하거나 통신에 사용할 목적으로 부호화하는 방법이다. 웹에서는 통신할 때 한글 같은 유니코드 문자가 오작동을 일으킬 수 있으므로 인코딩을 하고 다시 받을 때는 그 문자를 디코딩하여 받는다.<br>
-  escape() <br>
영문 알파벳과 숫자 일부 특수 문자를 제외하고 모두 인코딩
- encodeURL() <br>
escape() 함수에서 인터넷 주소로 사용되는 일부 특수 문자는 변환하지 않는다.<br>
- encodeURLComponent() <br>
알파벳과 숫자를 제외한 모든 문자를 인코딩한다.<br>
UTF-8 인코딩과 같다. <br>

<br><br><br>

## 4. 코드 실행 함수
자바스크립트는 문자열을 코드로 실행할 수 있는 함수가 존재한다.<br>

- eval(String) <br>
string을 자바스크립트 코드로 실행하는 함수이다.<br>

```
<script>
    var json = {
        "num1" : 2,
        "num2" : 1,
        "abc"  : 3    
    };

    var sum = 0;
    for(var i = 1; i <= 2; i++){
        var str = "";
        str += "sum += json.num" + i;
        eval(str)
    }

    console.log(sum);  // 3
</script>
```

변수처럼 사용되거나 위 코드처럼 json 키값에 따른 값들을 가져오기위해 사용되기도 한다. 무궁무진하게 응용 가능한 내장함수이다.<br><br><br>

## 5. 숫자 확인 함수
자바스크립트에는 infinity 와 NaN 같은 특별한 숫자가 있다.

- isDinite() <br>
number가 무한한 값인지 확인
- isNaN<br>
number가 NaN인지 확인<br><br>

###### __infinity__
```
var number = 1 / 0;
console.log(number); // infinity
```

###### __NaN__
```
var number = 0 / 0
console.log(number); // NaN
```

<br>

## 6. 숫자 변환 함수
- parseInt(String) : string을 정수로 바꾸어 준다.
- parseFloat(String) : string을 유리수로 바꾸어준다.

<br>

### 6-1. Number 함수의 단점
```
var won = '1000원'
var dollar = '1.5$'
alert(won + " : " + dollar);    // NAN : NAN
```
Number 함수는 숫자로 바꿀 수 없으면 NAN으로 변환한다. 문자열이 섞여있다면 parseInt를 사용하는 것이 낫다.
 


