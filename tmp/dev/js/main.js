/*‘оздать страницу с кнопкой. При клике на кнопку, на странице должен создаваться div произвольных размеров, в произвольном месте.
–вет фона div'а должен быть каждый раз случайным.
‘озданные div'ы можно перетаскивать мышкой (drag & drop)*/


function createSqueare(){
    let container = document.querySelector(".container");
    let elem = document.createElement("div");
    let randomNumber = window.Math.round(window.Math.random()*1000000);
    
    elem.className = "item";
    elem.style.width = "100px";
    elem.style.height = "100px";
    elem.style.background = "#"+randomNumber;
    elem.style.float = "left";
    elem.style.border = "solid 1px red";

    container.appendChild(elem);  
}

createSqueare();

document.getElementById("createSqueare").addEventListener("click", createSqueare);


//drag & drop

let activeElement;
let offsetX = 0;
let offsetY = 0;
let container = document.querySelector(".container");

let mDown = (e) => {
    console.log("Нажали кнопку мыши");
    activeElement = e.target;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
}

let mUp = (e) => {
    console.log("Отпустили кнопку миши");
    activeElement = null;
}

let mMove = (e) => {
    if(activeElement){
        activeElement.style.position = "absolute";
        activeElement.style.top = (e.clientY - offsetY) + "px";
        activeElement.style.left = (e.clientX - offsetX) + "px";
    }
}


container.addEventListener("mousedown", mDown);
container.addEventListener("mouseup", mUp);
document.addEventListener("mousemove", mMove);
