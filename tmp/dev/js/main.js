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

//createSqueare();

document.getElementById("createSqueare").addEventListener("click", createSqueare);


//drag & drop

let activeElement;
let offsetX = 0;
let offsetY = 0;
let container = document.querySelector(".container");

let mDown = (e) => {
    //console.log("Нажали кнопку мыши");
    activeElement = e.target;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
}

let mUp = (e) => {
    //console.log("Отпустили кнопку миши");
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


function savePage(){
    let items = document.querySelectorAll(".item");
    
    let str = "";
    for(let i = 0; i < items.length; i++){
        str += items[i].style.background+"-"+items[i].style.top+"-"+items[i].style.left+"|";
    }
    
    document.cookie = "squ="+str+";";
}

window.addEventListener("load", () => {
    let arrCookie = document.cookie.split(";");
    
    for(let item of arrCookie){
        if(item.indexOf("squ") !== -1){
            let startData = item.indexOf("=")+1;
            let endData = item.lastIndexOf("|")-5;
            let newStr = item.substr(startData, endData);
            let itemArr = newStr.split("|");
            
            let container = document.querySelector(".container");
    
            for(let i = 0; i < itemArr.length; i++){
                let elem = document.createElement("div");
                let prop = itemArr[i].split("-");
                console.log(prop);
                elem.className = "item";
                elem.style.width = "100px";
                elem.style.height = "100px";
                elem.style.background = prop[0];
                elem.style.top = prop[1];
                elem.style.left = prop[2];
                elem.style.position = "absolute";
                elem.style.float = "left";
                elem.style.border = "solid 1px red";

                container.appendChild(elem);
            }
        }
    }
    
});

save.addEventListener("click", savePage);