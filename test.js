'use strict';

// 1 
/*
    метод get предназначен для чтения, метод set для записи.
*/

// 2
let obj = {
    model: 'Gibson',
    price: 1500,
    get pricePosition(){
        console.log(`${this.model} - ${this.price}`); // Gibson - 1500
    },
    set pricePosition(value){
        [this.model, this.price] = value.split(' ');
    },
}

obj.pricePosition; // Gibson - 1500
obj.pricePosition = "Fender 2000";
obj.pricePosition; // Fender - 2000
