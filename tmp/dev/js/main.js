/*1. # ДЗ - 1

Создать модуль, который экспортирует функцию `prepend`
prepend имеет два параметра, в которые нужно передать элементы
Задача функции - вставить второй элемент в начало первого. Например:
`prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.

2. # ДЗ - 2

Создать модуль, который экспортирует функцию `deleteTextNodes`
Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.

3. # ДЗ - 3(со звездочкой)
Реалзиовать функцию, описанную в ДЗ 2, рекурсивно

4. # ДЗ - 4 (со звездочкой)

Создать модуль, который экспортирует функцию `scanDOM`.
`scanDOM` должна перебирать все узлы на странице и выводить в консоль статистику по элементам и классам на странице. Например:
Тэгов div: 10
Тэгов a: 5
Тэгов span: 10
Текстовых узлов: 100
Элементов с классом c1: 10
Элементов с классом c2: 20

Количеств и название классов/тегов заранее неизвестно. Функция сама должна определить количество и название тегов/классов.*/
/*
    N1
*/
function prepend(container, newElement, content){
    container = document.querySelector(container);
    newElement = document.createElement(newElement);
    //container.appendChild(newElement);
    container.insertBefore(newElement, container.firstElementChild);
    if(content !== undefined){
        newElement.innerHTML = content;
    }
}

//prepend('body', 'h1', "Заголовок h1");

/*
    N2
*/

function deleteTextNodes(element){
    let container = document.querySelector(element);
    let nodes = container.childNodes;
    
    for(let i = 0; i < nodes.length; i++){
        if(nodes[i].nodeType === 3){
           nodes[i].remove();
        }
    }
    
    return nodes;
}

//let res = deleteTextNodes(".container");
//for(let elem of res)console.log(elem);

/*
    N3
*/


function deleteTextNodesRec(element){
    //debugger;
    let container = document.querySelector(element);
    let nodes = container.childNodes;
    let arr = [];
    
    for(let i = 0; i < nodes.length; i++){
        console.log("Удаление", i);
        nodes[i].remove();
    }
    
    for(let i = 0; i < nodes.length; i++){
        if(nodes[i].firstElementChild){
            let elem = "#"+nodes[i].getAttribute("id");
            deleteTextNodesRec(elem);    
        }
        arr.push(nodes[i]);
    }
    
    return arr;
}

//let res = deleteTextNodesRec(".container");
//console.log(res);

/*
    N4
*/

function scanDOM(){
    let container = document.querySelector("body");
    let nodes = container.childNodes;
    console.log(nodes);
}

scanDOM();