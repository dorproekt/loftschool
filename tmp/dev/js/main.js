/*

2 задание:
Взять калькулятор, который был сделан в контексте ДЗ от 9 июля.
Если домашнее задание не сделано, то необходимо сделать.
Необходимо модифицировать калькулятор следующим образом:
Превратить калькулятор в Класс (конструктор + прототип)
Создать класс SqrCalc и унаследовать его от оригинального калькулятора.
SqrCalc должен расширять все методы оригинального калькулятора таким образом, чтобы возводить в квадрат результат всех расчетов. Например:

let myCalculator = new SqlCalc(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(myCalculator.dif(10, 20)); //вернет 4 900
console.log(myCalculator.div(2, 2)); //вернет 625
console.log(myCalculator.mul(2, 2)); //вернет 160 000


Обратите внимание, что не должно быть дублирования кода из методов оригинального калькулятора. Необходимо применить наследование.
Задачу необходимо выполнить в двух вариантах: ES5 и ES6

*/
/* ES5
let Calculator = function(firstNumber){
    this.firstNumber = firstNumber;
}

Calculator.prototype.sum = function(){
    let result = 0;
    
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }

    return result + this.firstNumber;
};


Calculator.prototype.dif = function(){
    let result = this.firstNumber;

    for(let i = 0; i < arguments.length; i++){
        result -= arguments[i];
    }

    return result;
};

Calculator.prototype.div = function(){
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
};

Calculator.prototype.mul = function(){
    let result = this.firstNumber;

    for(let i = 0; i < arguments.length; i++){
        result *= arguments[i];
    }

    return result;
}

function SqrCalc(firstNumber){
    Calculator.apply(this, arguments);
}

SqrCalc.prototype = Object.create(Calculator.prototype);

SqrCalc.prototype.sum = function(){
    let result = Calculator.prototype.sum.apply(this, arguments);
    return result*result;
};

SqrCalc.prototype.dif = function(){
    let result = Calculator.prototype.dif.apply(this, arguments);
    return result*result;
};

SqrCalc.prototype.div = function(){
    let result = Calculator.prototype.div.apply(this, arguments);
    return result*result;
};

SqrCalc.prototype.mul = function(){
    let result = Calculator.prototype.mul.apply(this, arguments);
    return result*result;
};

let myCalculator = new SqrCalc(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(myCalculator.dif(10, 20)); //вернет 4 900
console.log(myCalculator.div(2, 2)); //вернет 625
console.log(myCalculator.mul(2, 2)); //вернет 160 000
*/

/*ES6*/

class Calculator{
    
    constructor(firstNumber){
        this.firstNumber = firstNumber;
    }
    
    sum(){
        let result = 0;
    
        for(let i = 0; i < arguments.length; i++){
            result += arguments[i];
        }

        return result + this.firstNumber;
    }
    
    dif(){
        let result = this.firstNumber;

        for(let i = 0; i < arguments.length; i++){
            result -= arguments[i];
        }

        return result;
    }
    
    div(){
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
    }
    
    mul(){
        let result = this.firstNumber;

        for(let i = 0; i < arguments.length; i++){
            result *= arguments[i];
        }

        return result;
    }
}

class SqrCalc extends Calculator{
    constructor(firstNumber){
        super(firstNumber);
        this.firstNumber = firstNumber;
    }
    
    sum(){
        let result = super.sum();
        return result*result;
    }
}

let obj = new SqrCalc(10);
console.log(obj.sum(1,2));