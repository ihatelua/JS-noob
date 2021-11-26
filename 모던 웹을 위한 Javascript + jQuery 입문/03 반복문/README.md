> __2021-11-14__ <br/>
> # __`반복문`__
<br>

## 1. for in 반복문
배열이나 객체를 더욱 쉽게 다룰 수 있는 for in 반복문이다.

```javascript
<script>
    for(var i in array){
        alert(i);
    }
</script>
```

<br>

## 2. for of 반복문
ES6에서 추가된 반복문이다. 내부의 요소를 바로 넣어 활용할 수 있게 되었다. for in 반복문과 비슷한 형태지만, 반복 변수에 '요소'가 들어간다.

```javascript
<script>
    for(const element of [1,2,3,4]){
        alert(`요소는 ${element} 입니다.`);
    }
</script>
```

<br><br>
