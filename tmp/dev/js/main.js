let save = document.querySelector("#save");
let fSize = document.querySelector("#fS");
let bgColor = document.querySelector("#bgC");
let fontColor = document.querySelector("#fC");
let wrap = document.querySelector("#wrap");

document.addEventListener("keyup", e => {
    applyStyles();
});

save.addEventListener("click", () => {
    let url = "/"+fSize.value+"/"+bgColor.value+"/"+fontColor.value;
    //console.log(url);
    history.pushState({
        fSize: fSize.value,
        bgColor: bgColor.value,
        fontColor: fontColor.value
    }, "new", url);  
});

window.addEventListener("popstate", e => {
    console.log(e);
    
    fSize.value = e.state.fSize;
    bgColor.value = e.state.bgColor;
    fontColor.value = e.state.fontColor;
    
    applyStyles();
});

function applyStyles(){
    wrap.style.fontSize = fSize.value;
    wrap.style.backgroundColor = bgColor.value;
    wrap.style.color = fontColor.value;
}