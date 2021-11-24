function Rectangle(){
    var width = 0;
    var height = 0;

    this.getWidth = function(){return width;};
    this.getHeight = function(){return height;};
    this.setWidth = function(w){
        if(w < 0){
            alert("width에는 음수를 넣을 수 없습니다.");
            return;    
        }else{
            width = w;
        }
    };
    this.setHeight = function(h){
        if(h < 0){
            alert("height에는 음수를 넣을 수 없습니다.");
        }else{
            height = h;
        }
    };
    Rectangle.prototype.getArea = function(){
        return this.getWidth() * this.getHeight();
    }
}

var rectangle = new Rectangle();
rectangle.setWidth(-2);

rectangle.setWidth(2);
rectangle.setHeight(2);

console.log(rectangle.getArea());