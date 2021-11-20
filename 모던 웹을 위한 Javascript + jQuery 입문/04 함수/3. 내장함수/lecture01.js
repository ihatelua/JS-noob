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

console.log(sum)