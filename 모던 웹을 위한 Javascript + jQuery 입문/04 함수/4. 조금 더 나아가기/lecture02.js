function test(a,b,c,d){
    console.log(`${a}:${b}:${c}:${d}`); // 1:2:3:4
}
var arr = [1,2,3,4];
test(...arr);