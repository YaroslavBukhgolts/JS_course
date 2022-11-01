'use strict';

// 1
/*
    JSON - общий формат для представления значений и объектов. Предназначен для взаимодействия между фронтом и бэкендом, другими словами между клиентом и сервером.
*/

// 2 
// {'name':'John','age': 18,'isAdmin':true}; - объект формата JSON 
let obj = {
    name: 'Alex',
    age: 25,
    isStudent: true,
}
let newJson = JSON.stringify(obj);
console.log(newJson); // {"name":"Alex","age":25,"isStudent":true}
console.log(typeof newJson); // string

let obj1 = JSON.parse(newJson); // преобразуем JSON в объект
console.log(obj1);
console.log(typeof obj1); // object

// 3
/*
    JSON поддерживает следующие типы даннных:
    1. Объекты
    2. Массивы
    3. Примитивы:
        - строки
        - числа
        - булевы значения
        - null
*/
console.log(JSON.stringify(1)); // 1
console.log(JSON.stringify('apple')); // "apple"
console.log(JSON.stringify(true)); // true
console.log(JSON.stringify(null)); // null
console.log(JSON.stringify([1, 2, 3, 4])); // [1, 2, 3, 4]
console.log(JSON.stringify({name:'Alex', age: 25})); // {"name":"Alex","age":25}