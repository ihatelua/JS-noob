var array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
var output = ' ' ;

array.forEach(function (element, index, array) {
    sum += element;
    output += index + " : " + element + " -> " + sum + "\n"; 
});

console.log(output);

/*
 0 : 1 -> 1
1 : 2 -> 3
2 : 3 -> 6
3 : 4 -> 10
4 : 5 -> 15
5 : 6 -> 21
6 : 7 -> 28
7 : 8 -> 36
8 : 9 -> 45
9 : 10 -> 55
*/