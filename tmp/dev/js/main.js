Handlebars.registerHelper('formatTime', time => {
    let minutes = parseInt(time/60);
    let seconds = time - minutes*60;
    
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    return minutes + ':' + seconds;
});


Handlebars.registerHelper('dateFormat', date => {
    let resDate = new Date(date);
    return resDate;
});

new Promise((resolve) => {
    if(document.readyState == "complete"){
        resolve();
    }else{
        window.addEventListener("load", resolve);
    }
}).then(() => {
    return new Promise((resolve, reject) => {
        VK.init({  
            apiId: 6054796
        });

        VK.Auth.login(function(response) {
            if (response.session) {
                resolve(response);
            } else { 
                reject(new Error("Не удалось авторизироваться"));
            } 
        }, 8 | 4 | 16);
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        VK.api("users.get", {"name_case" : "gen"}, response => {
            if(response.error){
                reject(new Error(response.error.error_msg));
            }else{
                let userData = response.response[0];
                headerInfo.innerHTML = "Видео на странице "+userData.first_name+" "+userData.last_name;
                resolve();
            }
        });

    });
}).then(() => {
    return new Promise((resolve, reject) => {
        VK.api("video.get", {}, response => {
            if(response.error){
                reject(new Error(response.error.error_msg));
            }else{ 
                response.response.shift();
                //console.log(response.response);
                let sourse = document.querySelector("#videoVkTmp").innerHTML;
                let templateFn = Handlebars.compile(sourse);
                let template = templateFn({list: response.response})
                
                results.innerHTML = template;
                resolve();
            }
        });
    });
}).catch((e) => {
    console.error(e.message);
});  
