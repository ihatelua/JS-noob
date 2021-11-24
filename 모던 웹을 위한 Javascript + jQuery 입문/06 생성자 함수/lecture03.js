// 생성자 함수를 선언합니다.
function Rectangle(w, h){
  var width = w;
  var height = h;

  this.getWidth = function(){ return w; };
  this.getHeight = function(){ return h; };
  this.setWidth = function(w){
      if(w < 0){
          alert("길이는 음수 일 수 없습니다.");
      }else{
          width = w;
      }
  };
  this.setHeight = function(h){
      if(h < 0){
          alert("높이는 음수 일 수 없습니다.");
      }else{
          height = h;
      }
  };
}

Rectangle.prototype.getArea = function(){
  return this.getWidth() * this.getHeight();
}


// 생성자 함수를 선언합니다.
function Square(length){
  this.base = Rectangle;
  this.base(length, length);
}

Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;

// 변수를 선언합니다.
var rectangle = New Rectangle(5, 7);
var square = New Square(5);
console.log(rectangle.getArea() + " : " + square.getArea());