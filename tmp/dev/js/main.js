/*

1. ДЗ - 1:

написать модуль, который экспортирует аналоги методов для работы с массивами:
forEach, filter, map, slice, reduce, splice  пример:

let array = [1, 2, 3, 4, 5, 6];
forEach(array, item => console.log(item));
let greaterThan4 = filter(array, item => item > 4);
let sqare = map(array, item => item*item);

Описание того, как работают эти методы, есть на Mozilla Developer Network и в бесплатных видеоуроках LoftBlog/LoftSchool.
     
Реализация функции splice является задачей со звездочкой.
Ее выполнение не обязательно, но желательно.

Внимание:
 в данном задании запрещено использовать встроенные методы для работы с массивами! Разрешено использовать стандартные 
операторы 'for/for-in/while/if`' (и т.д.) и свойство 'length'

*/



function myForEach(arr, func){
    
    if(!Array.isArray(arr)){
        return console.error("Не массив!!!");
    }
    
    for(let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
    
};

function myFilter(arr, func){
    
    if(!Array.isArray(arr)){
        return console.error("Не массив!!!");
    }
    
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            newArr[newArr.length] = arr[i];
        }
    }
    
    return newArr;
}

function myMap(arr, func){
    
    if(!Array.isArray(arr)){
        return console.error("Не массив!!!");
    }
    
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
        newArr[newArr.length] = func(arr[i]);
    }
    
    return newArr;
}

function myReduce(arr, func){
    
    if(!Array.isArray(arr)){
        return console.error("Не массив!!!");
    }
    
    let result = 0;
    
    for(let i = 0; i < arr.length; i++){
        result = func(arr[i], result);
    }
    
    return result;
}

function mySlice(arr, p1, p2){
    
    //это массив?
    if(!Array.isArray(arr)){
        return console.error("Не массив!!!");
    }
    
    //создается новый массив
    let newArr = [];

    if(p1 === undefined){
        newArr = arr;
    }else if(p1 !== undefined && p2 === undefined){
        for(let i = p1; i < arr.length; i++){
            newArr[newArr.length] = arr[i];
        }
    }else if(p1 !== undefined && p2 !== undefined){
        for(let i = p1; i <= p2; i++){
            if(arr[i] === undefined){
                continue;
            }
            newArr[newArr.length] = arr[i];
        }
    }
        
    return newArr;
}

function remove (arr, indexes) {
  var arrayOfIndexes = [].slice.call(arguments, 1);  // (1)
  return arr.filter(function (item, index) {         // (2)
    return arrayOfIndexes.indexOf(index) == -1;      // (3)
  });
}


//let arr = [2, 3, 10, 25, 36];


//myForEach(arr, item => console.log(item));
//let res = myFilter(arr, num => num > 0);
//let res = myMap(arr, item => item*item);
/*let res = myReduce(arr, function(item, res){
    return res = item - item;
});*/

//let res = mySlice(arr, 1, 10);

//let res = remove(arr, 1);
//console.log(res);



/*

2. ДЗ - 2
Как известно, в js не существует способа проверить идентичность объектов.
Написав 'objA === objB' мы получим true только в том случае, если objA и objB указывают на один и тот же объект.

Задача: написать функцию deepEqual, которая принимает в качестве параметров два аргуманта - два объекта.

Если обе переменные указывают на один и тот же объект, значит оба объекта идентичны.

Если оба объекта имеют одинаковые свойства и их значения, значит оба объекта идентичны.

Посмотрите на примеры того, как должна работать фиункция deepEqual:
var objA = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: {
        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
    },
    prop5: 1000,
    prop6: new Date(2016, 2, 10)
};

var objB = {
    prop5: 1000,
    prop3: 'value3',
    prop1: 'value1',
    prop2: 'value2',
    prop6: new Date('2016/03/10'),
    prop4: {
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        },
        subProp1: 'sub value1'
    }
};

console.log(deepEqual(objA, objB)); //объекты идентичны, вернет true
        
Не смотря на то, что свойства в objB перемешаны(последовательность свойста в objB отичается от последовательности свойств в objA), функция всё равно вернет true, так как количество свойств, из имена и значения совпадают у обоих объектов.
Так же обратите вснимание, что deepEqual должна работать рекурсивно. 

Это значит, что если значением какого-то свойства объекта является массив или объект, то начать сверять и их у обоих объектов.

Если одним из элементов сверяемого массива, является другой массив или объект, то их тоже надо сверить рекурсивно.

При сверке объектов - последовательность свойств не важна, но при сверке массивов, вашна последовательность элементов, то есть массивы: `[1,2,3,4]` и `[2,1,3,4]` не равны, так как, хотя и имеют одинаковые значения, отличаются в последовательности этих значений.

Так же обратите внимание, что даты тоже должны сравниваться корректно, не смотря на отличия в способах создания.

Запрещено использовать сторонние библиотеки типа jQuery, underscore и прочие.

*/

function deepEqual(objA, objB){
    
    //массивы ключей
    let keysObjA = Object.keys(objA);
    let keysObjB = Object.keys(objB);
    
    //если разное количество ключей
    if(keysObjA.length !== keysObjB.length){
        return 1;
    }
    
    //если ссылка на один итот-же объект
    if(objA === objB){
        return 2;
    }

    for(let i = 0; i < keysObjA.length; i++){
        
        //есть ли свойство об. А в об. Б
        if(objB.hasOwnProperty(keysObjA[i])){
            
            //если свойства не равны
            if(objB[keysObjA[i]] !== objA[keysObjA[i]]){
                return 3;
            }
            
        }else{
            //если нету свойства в объекте
            return 10;
        }
    }
    return 6;
}

let a = {
    a: "tt",
    b: 22,
    d: true
};

let b = {
    a: "tt",
    b: 22,
    d: true
};

//console.log(deepEqual(a, b));

var arr = [1, 2, 3];

console.log(arr instanceof Array);