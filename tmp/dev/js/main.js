let url1 = "https://i.ytimg.com/vi/GTSK1PdcNk0/maxresdefault.jpg";
let url2 = "https://hi-news.ru/wp-content/uploads/2017/01/space-wallpaper-1366x768-650x365.jpg";
let url3 = "https://inform-ua.info/uploads/2017/01/kosmos-2-14838625499667.jpg";

//pending - ожидание
//fulfilled - выполнено
//rejected - выполнено с ошибкой
function loadImg(url){
    return new Promise((resolve, reject) => {
        let i = new Image();
        i.src = url;
        document.body.appendChild(i);

        i.addEventListener("load", () => {
            resolve();
        });

        i.addEventListener("error", () => {
            reject();
        });
    });
}

let p = loadImg(url1);

p.then(
    () => {
        console.log("Картинка 1 загружена");
        return loadImg(url2);
    }
).then(
    () => {
        console.log("Картинка 2 загружена");
        return loadImg(url3);
    }
).then(
    () => {
        console.log("Картинка 3 загружена");
    }
);
