var student = {};
student.name = "홍길동";
student.age = "25";

student.toString = function(){
    var output = "";
    for(var key in this){
        if(key != "toString"){
            output += key + "\t" + this[key] + "\n";
        }
    }
    return output;
}

console.log(student.toString());

delete(student.age);

console.log(student.toString());