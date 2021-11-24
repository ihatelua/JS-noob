function Student(){

}
var student = new Student();
console.log(student instanceof Student);
console.log(student instanceof Number);
console.log(student instanceof String);

/*
true
false
false
*/