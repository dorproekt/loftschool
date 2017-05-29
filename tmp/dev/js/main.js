/*

3. ДЗ 3 (со звездочкой):
Создать страничку с текстовым полем.
После загрузки странички, загрузить список городов при помощи AJAX.
При вводе текста в тестовое поле, выводить под текстовым полем список тех городов, в названиях которых есть введенный текст.
Использование промисов обязательно.
Запрещено использование любых библиотек (включая jQuery) и фреймворков.

*/


let myInput = document.getElementById("myInput");
let href = "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json";
let container = document.querySelector("ul.result-search");

function removeValue(e){
    e.target.setAttribute("value", "");
}

function getCity(href){
    return new Promise((resolve, reject) => {
        
        let xhr = new XMLHttpRequest();
        
        if(xhr){
            xhr.open("GET", href);
            xhr.onload = () => {
                resolve(xhr.responseText);
            };
            xhr.send();
        }else{
            reject("err");
        }
       
    });
}

myInput.addEventListener("focus", removeValue);

window.addEventListener("load", () => {
    getCity(href).then((val) => {
        
        let result = JSON.parse(val);
        
        let arrCity = [];
        for(let city of result){
            arrCity.push(city["name"].toLowerCase());
        }

        myInput.addEventListener("keypress", (e) => {
            container.innerHTML = "";
            let searchValue = e.target.value + e.key;
            let resArr = [];
            for(let item of arrCity){
                if(item.substr(0, searchValue.length) === searchValue){
                    resArr.push(item);
                }
            }
            if(resArr.length){
                for(let item of resArr){
                    container.innerHTML += "<li><a href='#"+item+"'>"+item+"</a></li>"; 
                }
            }
            
        });
        
        
    }, (value) => {
         console.log(value);
    });
});