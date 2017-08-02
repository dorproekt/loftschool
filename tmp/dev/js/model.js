var Model = {
    login: function(appId, perms){
        return new Promise(function(resolve, reject){
            VK.init({
                apiId: appId,
            });
            
            VK.Auth.login(function(response){
                if(response.session){
                    resolve(response);
                }else{
                    reject(new Error("Не удалось авторизироваться"));
                }
            }, perms);
        });
    },
    callApi: function(method, params){
        return new Promise(function(resolve, reject){
            VK.api(method, params, function(response){
                if(response.error){
                    reject(new Error(response.error.error_msg));
                }else{
                    resolve(response.response);
                    //console.log(response.response);
                }
            });
        });
    },
    getUser: function(){
        return this.callApi("users.get", {});
    },
    getMusic: function(){
        return this.callApi("audio.get", {});
    },
    getFriends: function(){
        return this.callApi("friends.get", {fields: "photo_100"});
    },
    getNews: function(){
        return this.callApi("newsfeed.get", {filters: 'post', count: 20});
    },
    getGroups: function(){
        return this.callApi("groups.get", {extended: 1});
    },
    getPhotos: function(){
       /* return new Promise(function(resolve, reject){
            VK.api("photos.get", {extended: 1, album_id: "wall"}, function(response){
                if(response.error){
                    reject(new Error(response.error.error_msg));
                }else{
                    for(let i = 0; i < response.response.length; i++){
                        console.log(response.response[i]["pid"]);
                        let res = new Promise(function(resolve, reject){
                            VK.api("photos.getComments", {photo_id: response.response[i]["pid"]}, function(response){
                                if(response.error){
                                    reject("sd");
                                }else{
                                    console.log("123",response.response);
                                    resolve(response.response);
                                }
                            });
                        }).then(function(res){
                            response.response[i]["c"] = res[1];
                        });
                        
                    }
                    let obj = response.response;
                    //console.log(response.response);
                    resolve(obj);   
                }
            });
        });*/
        return new Promise(function(resolve, reject){
            let arr = [];
            VK.api("photos.get", {extended: 1, album_id: "wall"}, function(response){
                resolve(response.response);
            });
            
        });
    },
    
    getMessage: function(photosId){
        return new Promise(function(resolve, reject){
             VK.api("photos.getComments", {photo_id: photosId}, function(response){
                resolve(response.response);
             });
        });
    }
}