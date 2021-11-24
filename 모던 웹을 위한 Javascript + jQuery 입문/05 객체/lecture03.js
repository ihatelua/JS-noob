function makeStudentInfo(name, age, korean, math, english){
  var result = {
      이름 : name,
      나이 : age,
      국어 : korean,
      수학 : math,
      영어 : english,
      getSum : function(){
          return this.국어 + this.수학 + this.영어;
      },
      getAverage : function(){
          return this.getSum() / 3;
      },
      toString : function(){
          return this.이름 + "\t" + this.getSum() + "\t\t" + this.getAverage();
      }
  };
  return result;
}

var arr = [];
arr.push(makeStudentInfo("홍길동", "25", 50, 50, 50));
arr.push(makeStudentInfo("홍동길", "26", 20, 100, 90));

var output = "이름\t총점\t평균\n"
for(var i in arr){
  output += arr[i].toString() + "\n";
}

console.log(output);

/*
이름	총점	평균
홍길동	150		50
홍동길	210		70
*/