'use strict';

// 1
/*
    Асинхронный код - это код, в котором во время выполнения одного участка кода, была возможность использовать другой код.
*/

// 2
/*
    Callback-функция, функция, которая передается как аргумент в другой функции, и выполняется после того как другая функция завершит свое выполнение. Callback-функции используются в асинхронном методе программирования.  
*/

// 3 
function loadScript(src, callback) {

    let script = document.createElement('script');
  
    script.lsrc = src;
  
    script.onload = () => callback(script);
  
    document.head.append(script);
  
  }