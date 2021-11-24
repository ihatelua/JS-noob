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