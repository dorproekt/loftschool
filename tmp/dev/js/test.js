var active;
var top = 0;
var left = 0;
var elem;

document.addEventListener("mousedown", e => {
    elem = e.target.closest("#test");
    active = true;
    let box = elem.getBoundingClientRect();
    top = box.top + pageYOffset;
    left = box.left + pageXOffset;
    elem.style.position = "absolute";
    elem.style.top = top + "px";
    elem.style.left = left + "px";
    elem.style.zIndex = 9999;
    //console.log("Нажата кнопка", top, left);
});

document.addEventListener("mouseup", e => {
    active = false;
    //console.log("Отпущена кнопка", active);
});

document.addEventListener("mousemove", e => {
    
    if(active){
       //console.log("перемещение курсора", e);
        elem.style.top = e.clientY + "px";
        elem.style.left = e.clientX + "px";
    }
});