'use strict';

// 1
/*
    рекурсия - это вызов функции самой себя
*/

// 2
// итеративный способ
function pow1(x, n){
    let res = 1;
    for(let i = 0; i < n; i++){
        res *= x;
    }
    return res;
}

let val1 = pow1(2, 4);
console.log(val1);

// рекурсивынй способ
function recurtionPow(x, n){
    return (n !==1)? x * recurtionPow(x, n - 1) : x;
}

let val2 = recurtionPow(2, 3);
console.log(val2);