//обработка ошибок

console.log("Простое сообщение");
console.log("Простое сообщение","еще","ttt");
console.log("Простое сообщение с форматированием: %s, %s","еще","ttt");
console.info("info");
console.warn("warning");
console.error("error");

console.time("1");
    for(let i = 0; i < 20000000; i++){

    }
console.timeEnd("1");

function f1(){
    console.log(1);
    
    function f2(){
        console.log(2);
        console.trace("стек");
    }
    
    f2();
    
    console.log(3);
}
console.profile("Профайл");
    f1();
console.profileEnd();


function div(a, b){
    if(b === 0){
        throw new Error("На ноль делить нельзя!");
    }
    if(b < 0){
        throw new Error("На отрицательное число делить нельзя");
    }
    return a/b;
}
try{
    //debugger; 
    let res = div(24, -5);
    console.log(res);
}catch(e){
    console.error(e.message);
}