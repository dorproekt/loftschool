/*

3. # ДЗ 3 (со звездочкой)
Написать функцию 'calculator' (в виде модуля), которая имеет один параметр - 'firstNumber'
'firstNumber' - это число, с которым будут производиться действия
Функция 'calculator' должна возвращать объект, у которого должно быть несколько функций.
Каждая из этих функций принимает неограниченное количество аргументов и производит какие-то арифметические операции с этими аргументами и тем числом, которое было передано в 'calculator' и возвращает результат:
- 'sum' - складывает 'firstNumber' с переданным аргументами
- 'dif' - вычитает из 'firstNumber' переданные аргументы
- 'div' - делит 'firstNumber' на первый переданный аргумент. Результат этой операции делится на второй переданный аргумент (если он есть) и так далее
- 'mul' - умножает 'firstNumber' на первый переданный аргумент. Результат этой операции умножается на второй переданный аргумент (если он есть) и так далее.
Предусмотреть исключительные ситуации, для функции 'div', когда делитель равен нулю

пример:
var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

*/

(function(){
    
    function calculator(firstNumber){
        return {
            
            firstNumber: firstNumber,
            
            sum: function(){
                let result = 0;
                
                for(let i = 0; i < arguments.length; i++){
                    result += arguments[i];
                }
                
                return result + this.firstNumber;
            },
            
            dif: function(){
                let result = this.firstNumber;
                
                for(let i = 0; i < arguments.length; i++){
                    result -= arguments[i];
                }
                
                return result;
            },
            
            div: function(){
                let result = this.firstNumber;
                
                for(let i = 0; i < arguments.length; i++){
                    try{
                        if(arguments[i] === 0){
                            throw new Error("На ноль делить нельзя!!!");
                        }
                        result /= arguments[i];   
                    }catch(e){
                        console.log(e.message);
                    }
                }
                
                return result;
            },
            
            mul: function(){
                let result = this.firstNumber;
                
                for(let i = 0; i < arguments.length; i++){
                    result *= arguments[i];
                }
                
                return result;
            },
            
        };
    }
    
    var myCalculator = calculator(100);
    
    console.log(myCalculator.sum(2,6,2));
    console.log(myCalculator.dif(12,36,25));
    console.log(myCalculator.div(2, 0, 25));
    console.log(myCalculator.mul(2,2,4));
    //console.log(myCalculator.firstNumber);
    
})();