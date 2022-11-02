'use strict';

// 1 
/*
    Стрелочные функции - анонимные функции, позволяют записать функцию в более лаконичном виде. Создаются с помщью 
    () => {} стрелки, собственно отсюда и название. Cтрелочные функции не могут быть созданы с помощью конструтора.
*/

// 2
/*
    Очень часто стрелочные функции используются как callback функции - arr.forEach(() => {}), в методах объектов и просто для сокращения кода и придания ему более лаконичного вида.
*/
function pow(x,n){
    return x**n;
}

let pow1 = (x, n) => x**n;
console.log(pow1(2, 3));

// 3
/*
    Стрелочные функции не имеют собственного this, их нельзя создать с помощью конструктора, не имеют arguments.
*/