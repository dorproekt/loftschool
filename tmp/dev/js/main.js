/*

1. ДЗ 1:
Создать модуль, который экспортирует функцию `timer`.
Функция `timer` должна возвращать новый промис.
Функция `timer` принимает 1 аргумент - количество миллисекунд, через которые промис должен перейти в состояние `fulfilled`.
Пример использования:
timer(3000).then(() => console.log('я вывелась через 3 секунды'))

*/

function timer(time){
    return promise = new Promise(function(resolve, reject){
        if(time){
            setInterval(() => {
                resolve(time);
            }, time);
        }else{
            reject();
        }
    });
}


timer(5000).then(function(val){
    console.log("Я вызвалась через "+val/1000+" с.");
});
