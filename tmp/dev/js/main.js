function sum(){
    let result = 0;
    
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    
    return result;
}

function filter(source, fn){
    let arr = [];
    
    for(let i = 0; i < source.length; i++){
        if(fn(source[i])){
            arr.push(source[i]);
        }
    }
    
    return arr;
}

function foo(param){
    return param > 4;
}


function rec(a){
    console.log(a);
    a += 1;
    if(a < 1000){
        rec(a);
    }
}


//стрелочные функции

let func1 = () => {
    console.log(25);
}

/*

написать рекурсивную функцию, которая выводит все значения массива на экран (ниже описание)
Напишите модуль, который экспортирует функцию с именем `consoleRec`. Функция должна **рекурсивно** выводить элементы массива на экран. Запрещено использовать циклы и методы для работы с массивами. Функция должна принимать два аргумента: массив и… что-то еще. Что именно - остается на ваше усмотрение. Пример вызова:

consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], ???);
должна вывести на экран:
я
умею
писать
рекурсивные
функции


*/

function consoleRec(arr, i){
    console.log(arr[i++]);
    if(arr[i] !== undefined){
        consoleRec(arr, i);
    }
}

let array = ['я', 'умею', 'писать', 'рекурсивные', 'функции'];
consoleRec(array, 0);