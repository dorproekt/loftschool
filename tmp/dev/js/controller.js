
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
           
            Model.getMessage(photos).then(function(res){
                /*console.log(photos); 
                console.log(res);*/
                for(let i = 0; i < res.length; i++){
                   console.log(res[i]); 
                }        
                let resul = [];
                for(let i = 0; i < photos.length; i++){

                    resul[i] = {};
                    resul[i] = photos[i];
                    //resul[i].message = res[i].message;
                }
                console.log(resul);
                
                results.innerHTML = View.render('photos', {list: res});
            });
            
        });  
    }
}