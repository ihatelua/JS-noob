 // 클로저함수 예제3
function callbackFunction(callback) {
  setTimeout(callback, 100);
}

for (var i = 0; i < 3; i++) {
  console.log('start for');
  (function(v) {
      callbackFunction(function() {
          console.log('in callback function');
          console.log(v + 10);
      })
  })(i);
  console.log('end for');
}