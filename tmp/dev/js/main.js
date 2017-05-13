/*

2. # ДЗ - 2
Написать фукнцию 'isSomeTrue', которая принимает 2 параметра - 'source' и 'filterFn'
'source' - массив
'filterFn' - фильтрующая функция
Если фильтрующая функция вернет 'true' хотя бы для одного элемента массива, то и сама 'isSomeTrue' вернет 'true'
Если фильтрующая функция вернет 'false' для ВСЕХ элементов массива, то и сама 'isSomeTrue' вернет 'false'

Всё должно быть реализовано с использованием чистого js (не используя сторонние библиотеки).
Так же, нельзя использовать функции для работы с массивами.

пример:
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false

*/

function isSomeTrue(source, filterFn){
    try{
        if(source.length === 0){
            throw new Error("Пустой массив!");
        }
        for(let i = 0; i < source.length; i++){
            if(filterFn(source[i])){
                return true;
            }
        }
        return false;
    }catch(e){
        alert(e.message);
    }
}

function filterFn(val){
    if(typeof val !== "number"){
        return false;
    }
    return true;
}

let source = [1,2];
let res = isSomeTrue(source, filterFn);

if(res){
    console.log(res);
}