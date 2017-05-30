/*
    BOM
*/

/*

1. ДЗ 1:
Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
Для каждой cookie в таблице, необходимо добавить кнопку "удалить", При нажатии на "удалить", на экран должен быть выведен confirm с текстом "Удалить cookie с именем …?". Вместо … необходимо подставить имя удаляемой cookie. Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.

*/

document.querySelector(".container h2").innerText = "Cookies";
let container = document.querySelector(".container");

//Все куки
let allCookies = document.cookie;

//разбивка на массив всех кук
let arrCookies = allCookies.split("; ");

//создание таблицы в контейнере
let table = document.createElement("table");
table.className = "cookies";
container.appendChild(table);
let tHead = "<tr><th>Название:</th><th>Значение:</th><th>Удалить:</th></tr>";
table.innerHTML = tHead;

//вывод куки на странице
for(let item of arrCookies){
    let arrRes = item.split("=");
    let tr = document.createElement("tr");
    tr.innerHTML = "<td>"+arrRes[0]+"</td><td>"+arrRes[1]+"</td><td><button class='removeCookie' value="+arrRes[0]+" data-cookie="+item+">Удалить куку</button></td>";
    table.appendChild(tr);
}

window.addEventListener("load", () => {
    let btnRemoveCookies = document.querySelectorAll(".removeCookie");
    
    for(let i = 0; i < btnRemoveCookies.length; i++){
        btnRemoveCookies[i].addEventListener("click", removeCookie);
    }
    
    //удаление куки
    function removeCookie(e){
        let name = e.target.value;
        let cookie = e.target.getAttribute("data-cookie");
        let del = confirm("Удалить cookie с именем " +e.target.value);
        if(del){
            document.cookie = cookie+";expires="+new Date(1);
            let tr = e.target.parentElement.parentElement;
            tr.remove();
        }

    }
    
    
});

