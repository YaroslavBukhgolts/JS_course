'use strict';

// 1
/*
    MAP - словарь, набор данных, представляющих собой пары ключь - значение. Основное отличие от объектов заключается в том, что ключь может быть любым типом данных, даже объектом, в то время у объектов ключ это всегда строка.
*/ 
let newMap = new Map();

// set() - добавляет данные в map
newMap.set('model', 'audi');
newMap.set('year', 2015);
newMap.set(1, true)

console.log(newMap);

// get() - позволяет получить значение ключа
console.log(newMap.get('year')); // 2015

// delete() - удаляет указанные данные
newMap.delete('model');
console.log(newMap);

// clear - полностью очищает словарь
newMap.clear();
console.log(newMap);

// size - показывает длинну словаря
console.log(newMap.size); // 0
newMap.set('model', 'audi');
console.log(newMap.size); // 1

// has() - возвращает true если такой ключ есть в словаре
console.log(newMap.has('model')); // true
console.log(newMap.has('year')); // false

// методы для перебора словаря
// keys() - перебор словаря по ключам
newMap.set('model', 'audi');
newMap.set('year', 2015);
newMap.set(1, true);

for (let key of newMap.keys()) {
    console.log(key); // model year 1
}

// values() - перебор значений
for (let val of newMap.values()) {
    console.log(val); // audi 2015 true
}

// entries() - возвращает пары вида ключ - значение
for (let pars of newMap.entries()) {
    console.log(pars); // ['model' - 'audi'] ['year' - 2015] [1 - true]
}

// 2
/*
    set - коллекция уникальный значений, множество
*/
let newSet = new Set();
console.log(newSet);

// add() - добавляет данные в множество, причем если данные повтрояются, то будет добавленно только одно
newSet.add('Fender');
newSet.add('Gibson');
newSet.add(1);
newSet.add(1); // не добавится, поскольку значение 1 уже есть

console.log(newSet); // Fender Gibson 1

// delete - удаляет значение
newSet.delete(1);
console.log(newSet); // Fender Gibson

// has() - возвращает true, если такое значение есть в противном случае возвращает false
console.log(newSet.has('Gibson')); // true
console.log(newSet.has(1)); // false

// clear - удаляет все значения их множества
newSet.clear();
console.log(newSet); // Set(0){}

// size() - возвращает колличество элементов множества
console.log(newSet.size); // 0
newSet.add('BcRich');
console.log(newSet.size); // 1

// Методы перебора те же самые, что и у Map - key() values() entries(). entries() - присутствует дял обратной совместимости с map 
