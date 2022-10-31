'use strict';

// 1
/*
    Date() - лбъект для работы с временем. Можно использовать для хранения, создания, изменения или просто для вывода текущей даты.
*/
let newDate = new Date();
console.log(newDate); // текущие дата и время по Гринвичу

newDate = new Date(2938726351); // время равное колличеству миллисекунд прошедших с первого января 1970г. Число показывающее кол-во миллисекунд называется timestamp

console.log(newDate); //1970-02-04T00:18:46.351Z

// Объект Date(year, mounth, day, hours, minute, seconds, ms) - создание объекта времени с заданными параметрами
let newDate2 = new Date(2022, 9, 31, 18, 57, 0, 0);
console.log(newDate2);

// Получение компонентов даты
// getFullYear() - получить год
let newDate3 = new Date(24 * 3600 * 3600 * 1000);
console.log(newDate3.getFullYear()); // 1979 год

// getMounth() - получить месяц
console.log(newDate3.getMonth()); // 10 (октябрь)

// getDate() - получить день месяца
console.log(newDate3.getDate()); // 10 число

// getHours() - часы
console.log(newDate3.getHours()); // 3 часа

// getMinutes() - минуты
console.log(newDate3.getMinutes()); // 0 минут

// getSeconds() - секунды
console.log(newDate3.getSeconds()); // 0 секунд

// getMilliseconds() - миллисекунды
console.log(newDate3.getMilliseconds()); // 0 миллисекунд

// getDay() - день недели
console.log(newDate3.getDay()); // 6 суббота

// getTime() - возвращает timestamp для заданной даты
let newDate4 = new Date(2022, 10, 31);
console.log(newDate4.getTime()); // 1669842000000 миллисекунд

// Методы для установки компонентов даты и времени
/*
    setFullYear() - устанавливает год
    setMounth() - устанавливает месяц
    setDate() - число
    setHours() - часы 
    setMinutes() - минуты
    setSeconds() - секунды
    setMilliseconds() - миллисекунды
    setTime() - устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970
*/

// Date.now() - метод, возвращающий текущую метку времен
let newDate5 = Date.now();
console.log(newDate5);

// Date.parse(str) - считывает дату из строки. Формат строки должен быть YYYY-MM-DDTHH:mm:ss:sssZ. Возвразает таймстамп