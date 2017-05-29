/*

2. ДЗ 2:
Загрузить города при помощи AJAX из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json (сервер поддерживает AJAX CORS)
Отсортировать города по алфавиту и вывести на странице.
Использование промисов обязательно.
Запрещено использование любых библиотек (включая jQuery) и фреймворков.

*/


function getText(){
   return new Promise((resolve, reject)=>{
       let xhr = new XMLHttpRequest();

        xhr.open("GET", "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json");

        xhr.onload = function() {  
            if(xhr.response){
                resolve(xhr.response);
            }else{
                reject("Ошибка");
            }
        };

        xhr.send(); 
   });
}


myButton.addEventListener("click", ()=>{
    getText().then((val)=>{
       
        let citys = JSON.parse(val);
        let sortCitys = [];
        
        for(let item of citys){
            sortCitys.push(item["name"]);
        }
        sortCitys = sortCitys.sort();
        
        let container = document.querySelector(".citys");
        for(let item of sortCitys){
            container.innerHTML += "City - "+item+"<br><hr>";
        }
        
    }, (val)=>{
        console.log("Error");
    });
});
