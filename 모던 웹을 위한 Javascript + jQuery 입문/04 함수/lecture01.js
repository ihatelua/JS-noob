function MakeAdder(x){
    return function(y){
        return x + y;
    }
}

const add3 = MakeAdder(3); 
console.log(add3(2));

const add10 = MakeAdder(10);
console.log(add10(5));
console.log(add3(1));