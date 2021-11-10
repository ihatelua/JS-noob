function Car(model, speed, color){
    this.model = model;
    this.speed = speed;
    this.color = color;
    this.break = function(){
        this.speed -= 10;
    }
    this.accel = function(){ 
        this.speed += 10;
    } 
}

myCar = new Car("520d", 60, "red");  

document.write("모델 : " + myCar.model + " 속도 : " + myCar.speed + "<br />");
myCar.break();
document.write("모델 : " + myCar.model + " 속도 : " + myCar.speed + "<br />");
myCar.accel();
document.write("모델 : " + myCar.model + " 속도 : " + myCar.speed + "<br />");