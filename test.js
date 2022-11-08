'use strict';

// 1 
/*
    Модуль - это часть кода вынесенная в отдельный файл, скрипт. Модуль могут загружать друг друга и использовать диретивы import и export.
*/

// 2
/*
    export - экспортирует функционал, import - импортирует функционал.
    Export. Мы можем пометить любое объявление как экспортируемое, разместив export перед ним, будь то переменная, функция или класс. 
*/
    export function nameFunction(){
        //...
    }

/* 
    Import - чтобы импортировать, то что нам надо, используем import;
*/
    import { nameFunction } from 'путь до файла';

    // если импортировать нужно много чего, мы можем импортировать всё сразу в виде объекта
    import * as obj from 'путь до файла';

    
// 3
// 📁 sayLike.js

export function sayLike(user) { // для экспорта необходимо использовать слово export

    alert(`I like ${user}!`);
  
}
  
// 📁 main.js
  
import {sayLike} from './sayLike.js';
  
alert(sayLike);
  
sayLike('Javascript');
