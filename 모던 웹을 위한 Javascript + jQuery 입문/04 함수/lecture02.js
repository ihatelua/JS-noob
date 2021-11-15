 function makeAdder(x) {
      var y = 1;
      return function(z) {
        y = 100;
        return x + y + z;
      };
    }

    var add5 = makeAdder(5)(2); 
    var add10 = makeAdder(10)(2); 
    //클로저에 x와 y의 환경이 저장됨
    
    console.log(add5);    // 107 (x:5 + y:100 + z:2)
    console.log(add10);   // 112 (x:10 + y:100 + z:2)
    //함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산1
    