/*(function(){
    $(".accardion li .title").click(function(){
        $(".active").removeClass("active");
        //$(".description").slideUp(1000);
        $(this).parent("li").addClass("active");
        $(this).siblings(".description").slideToggle(500);
    });
})();*/

var li = document.getElementsByTagName("li");

for(var i = 0; i < li.length; i++){
    
    li[i].onclick = function(){
        var desc = this.querySelector(".description");
        //если есть вложенность 
        if(desc != null){
            //проверяем на класс active
            if(this.hasAttributes("class", "active")){
                this.removeAttribute("class");
                desc.style.display = "none";
            }else{
                this.setAttribute("class", "active");
                desc.style.display = "block";
            }
        }
    };
}


function removeClass(){
    for(var i = 0; i<li.length; i++){
        li[i].removeAttribute("class");
    }
}

/*function countClick(){
    var count = 0;
    return function(){
        return count++;
    }
}

var cnt = countClick();

document.body.onclick = function(){
    console.log(cnt());
};*/

function hideDesc(){
    var desc = document.querySelectorAll(".description");
    for(var i = 0; i < desc.length; i++ ){
        desc[i].style.display = "none";
    }
}