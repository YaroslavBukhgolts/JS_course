'use strict';

// 1
/*
    Класс - шаблон для создания объектов с какими-либо общими признаками, позволяет установить начальные значения (свойства) и реализацию поведения (методы)
*/

// 2 Синтаксис класса
class MyClass {
    constructor(title, price){ // конструтор
        this.title = title,
        this.price = price
    }

    saler = 'Guitar Shop'; // свойство
    
    get title(){ // метод геттер
        return this._title;
    }

    set title(value){ // метод сеттер
        this._title = value;
    }
    get priceItem(){
        return `${this.title} - ${this.price}`
    }
    method1() {} // метод 1
    method2() {} // метод 2
}

let sale1 = new MyClass('BCRich', 3000);
console.log(sale1);

console.log(sale1.saler);

// 3
/*
    class по своему типу является функцией. 
*/