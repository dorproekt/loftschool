
var Controller = {
    friendsRoute: function(){
        return Model.getFriends().then(function(friends){
            results.innerHTML = View.render('friends', {list: friends});
        });
    },
    newsRoute: function(){
        return Model.getNews().then(function(news){
            results.innerHTML = View.render('news', {list: news.items});
        });
    },
    musicRoute: function() {
        return Model.getMusic().then(function(music) {
            results.innerHTML = View.render('music', {list: music});
        });
    },
    groupsRoute: function(){
        return Model.getGroups().then(function(groups){
            results.innerHTML = View.render('groups', {list: groups});
        });
    },
    photosRoute: function(){
        return Model.getPhotos().then(function(photos){
           let res = [];
            for(let i = 0; i < photos.length; i++){
                Model.getMessage(photos[i]["pid"]).then(function(r){
                    /*console.log(photos); 
                    console.log(res);*/
                    res = r;
                });
            }
            
            console.log(res);
            results.innerHTML = View.render('photos', {list: res});
        });  
    }
}