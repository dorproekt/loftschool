let object1 = {
    name: "Александр",
    lastName: "Горбань",
    age: 30,
    valueOf: function(){
        return this.age;
    }
};

let object2 = {
    name: "Александр",
    lastName: "Горбань",
    age: 20,
    /*valueOf: function(){
        return this.age;
    }*/
    valueOf(){
        return this.age;
    }
};

/*for(let prop in object){
    console.log(object[prop]);
}

if(object.hasOwnProperty("add")){
    console.log("Есть такое свойство");
}else{
    console.log("Нету такого свойства");
}*/

//let res = Object.keys(object);

if(object1 > object2){
    console.log("!!!!");
}