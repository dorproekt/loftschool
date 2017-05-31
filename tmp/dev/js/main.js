/*1. ДЗ 1:
Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
Для каждой cookie в таблице, необходимо добавить кнопку "удалить", При нажатии на "удалить", на экран должен быть выведен confirm с текстом "Удалить cookie с именем …?". Вместо … необходимо подставить имя удаляемой cookie. Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.

*/

/*

2. ДЗ 2:
К страничке из предыдущего задания необходимо добавить форму с текстовыми полями и кнопкой "добавить".
Список текстовых полей:
- имя
- значение
- срок годности (количество дней)

После нажатия на кнопку "добавить" должна быть создана (и добавлена в таблицу) новая cookie с указанными параметрами. Обратите внимание, что в поле "срок годности" указывается количество дней (начиная с текущего), на протяжении которых будет доступна cookie.

После добавление cookie, значения текстовых полей формы должны быть очищены.
Если какое-то из полей формы не заполнено, то, при нажатии на кнопку "добавить", cookie не должна быть создана, а на экран должен быть выведен alert с предупреждением "Заполните все поля формы".
Так же заметьте, что при работе с формой и таблицей, не должно быть перезагрузок страницы
*/

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

//создание куки
function createCookie(e){
    e.preventDefault();
    
    //выборка всех значений
    let name = document.getElementById("name").value;
    let val = document.getElementById("val").value;
    let date = Number(document.getElementById("date").value);
    
    if(name == false || val == false || date == false){
        alert("Заполните все поля!");
        return false;
    }else{
        date = date*24*60*60*1000;
        let nowDate = new Date().getTime();
        let finalDate = date + nowDate;

        //запись куки
        document.cookie = name+"="+val+";expires="+new Date(finalDate);
        
        //Добавление в таблицу
        let tr = document.createElement("tr");
        tr.innerHTML = "<td>"+name+"</td><td>"+val+"</td><td><button class='removeCookie' value="+name+" data-cookie="+name+"="+val+">Удалить куку</button></td>";
        let table = document.querySelector("table");
        table.appendChild(tr);
        tr.querySelector(".removeCookie").addEventListener("click", removeCookie);

        //Очистка всех инпутов
        let inputs = document.querySelectorAll("input");
        for(let input of inputs){
            input.value = "";
        }   
    }
}

function outputCookies(){
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
}

function outputCreateCookie(){
    let form = document.createElement("form");
    form.setAttribute("method", "POST");
    container.appendChild(form);

    form.innerHTML = "<h2>Добавить куку</h2><label for='name'>Name<input id='name' type='text' name='name' value=''></label>";
    form.innerHTML += "<label for='value'>Value<input id='val' type='text' name='value' value=''></label>";
    form.innerHTML += "<label for='date'>Date<input id='date' type='text' name='date' value=''></label>";
    form.innerHTML += "<button id='sendCookie'>Add cookie</button>";

    sendCookie.addEventListener("click", createCookie);
}

//главный контейнер
let container = document.querySelector(".container");

window.addEventListener("load", () => {
    //вывод кук
    outputCookies();
    
    //вывод формы создания кук
    outputCreateCookie();
    
    let btnRemoveCookies = document.querySelectorAll(".removeCookie");
    
    for(let i = 0; i < btnRemoveCookies.length; i++){
        btnRemoveCookies[i].addEventListener("click", removeCookie);
    }
    
});

