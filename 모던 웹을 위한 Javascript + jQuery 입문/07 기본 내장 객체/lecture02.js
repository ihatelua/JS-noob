var array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var output = array.map(function (element) {
    return element + element;
});

console.log(output);

/*
Array(10) = {
    0: 2  ,
    1: 4  ,
    2: 6  ,
    3: 8  ,
    4: 10 ,
    5: 12 ,
    6: 14 ,
    7: 16 ,
    8: 18 ,
    9: 20 
}
*/