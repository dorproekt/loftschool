/*
1. # ДЗ 1:
Написать функцию 'isAllTrue', которая принимает 2 параметра - 'source' и 'filterFn'
source - массив 'filterFn' - фильтрующая функция
Если фильтрующая функция вернет 'true' для ВСЕХ элементов массива, то и сама 'isAllTrue' вернет 'true'
Если фильтрующая функция вернет 'false' хотя бы для одного элемента массива, то и сама 'isAllTrue' вернет 'false'

пример:
var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = ['это', 'массив', 'без', 'чисел'];

function isNumber(val) {
return typeof val === 'number';
}

console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false

Выбрасывать и обрабатывать исключение, если в 'source' пустой массив.

*/

function isAllTrue(source, filterFn){
    //debugger;
    try{
        if(source.length === 0){
            throw new Error("Пустой массив!");
        }
        for(let i = 0; i < source.length; i++){
        
            if(!filterFn(source[i])){
                return false;
            }
        }
        
        return true;
    }catch(e){
        console.error(e.message)
    }
}


let source = ["1", "2", "40", 50];
let arr = [];

function isNumber(val){
    
    if(typeof val !== 'number'){
        return false;
    }
    
    return true;
}


function isStr(val){
    
    if(typeof val !== 'string'){
        return false;
    }
    
    return true;
}

let res = isAllTrue(arr, isNumber);
console.log(res);