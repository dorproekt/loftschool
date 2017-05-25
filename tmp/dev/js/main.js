//ajax
/*document.querySelector("#sendAjax").addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "test.txt");
    xhr.addEventListener("load", () => {
        console.log("Ответ получен", xhr.responseText);
        document.body.innerText = xhr.responseText;
    });
    
    xhr.send();
});*/

//promis ajax
/*function sendAjax(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
            resolve(xhr.responseText);
        });
        xhr.addEventListener("error", () => {
            reject();
        });
    
        xhr.send();
    });
}

myButton.addEventListener("click", () => {
    sendAjax("test.txt").then((responseText) => {
        console.log(responseText);
    });
});*/

//json

function sendAjax(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
            resolve(xhr.responseText);
        });
        xhr.addEventListener("error", () => {
            reject();
        });
    
        xhr.send();
    });
}

myButton.addEventListener("click", () => {
    sendAjax("data.json").then((responseText) => {
        let result = JSON.parse(responseText);
        //JSON.parse(responseText);
        console.log(result);
    });
});