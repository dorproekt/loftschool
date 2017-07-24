let inputAllFriends = document.getElementById("serchAllFriends");
let inputAddFriends = document.getElementById("serchAddFriends");

//поиск по всем друзьям
inputAllFriends.addEventListener("input", () =>{
    let allFriends = document.querySelectorAll(".all-friends li");
    
    search (inputAllFriends, allFriends)
});

//поиск по выбраным друзьям
inputAddFriends.addEventListener("input", () =>{
    let addFriends = document.querySelectorAll(".add-friends li");
    
    search (inputAddFriends, addFriends)
});

//добавить в список друзей
/*document.querySelector(".all-friends ul").addEventListener("click", (e) =>{
    //console.log(e.target);
    if(e.target.getAttribute("class") === "glyphicon glyphicon-plus"){
        //console.log(e.target.getAttribute("class"));
        e.target.setAttribute("class", "glyphicon glyphicon-remove");
        let li = e.target.parentElement;
        document.querySelector(".add-friends ul").appendChild(li);
    }
});*/

//удалить из списка друзей
/*document.querySelector(".add-friends ul").addEventListener("click", (e) => {
    //console.log(123);
    if(e.target.getAttribute("class") === "glyphicon glyphicon-remove"){
        e.target.setAttribute("class", "glyphicon glyphicon-plus");
        let li = e.target.parentElement;
        document.querySelector(".all-friends ul").appendChild(li);
    }
});*/


//drag'n'drop
let active;
let elem;
let leftX;
let topY;
let width;
let addFriends = document.querySelector(".add-friends");
let coordsAddFriends = addFriends.getBoundingClientRect();
let coordsElem;

document.body.addEventListener("mousedown", e => {
    
    if(e.which != 1){
        return;
    }
    
    //добавить в список друзей
    if(e.target.getAttribute("class") === "glyphicon glyphicon-plus"){
        //console.log(123);
        e.target.setAttribute("class", "glyphicon glyphicon-remove");
        let li = e.target.parentElement;
        document.querySelector(".add-friends ul").appendChild(li);
        return;
    }
    
    //удалить из списка друзей
    if(e.target.getAttribute("class") === "glyphicon glyphicon-remove"){
        e.target.setAttribute("class", "glyphicon glyphicon-plus");
        let li = e.target.parentElement;
        document.querySelector(".all-friends ul").appendChild(li);
        return;
    }
    
    active = true;
    elem = e.target.closest("li");
    
    if(elem !== null){
        elem.style.backgroundColor = "#f0f0f0";
    }

    if(elem){
        coordsElem = elem.getBoundingClientRect();
        leftX = e.offsetX;
        topY = e.offsetY;
        width = coordsElem.width;
    }
    
    console.log("нажали на кнопку мышки");
});
    
document.body.addEventListener("mouseup", e => {
    console.log(e.currentTarget);
    if(e.which != 1){
        return;
    }
    active = false;
    
    if(elem){
        elem.style.backgroundColor = "#fff";
    
        if(parseInt(elem.style.left) >= coordsAddFriends.left && parseInt(elem.style.left) <= coordsAddFriends.right && parseInt(elem.style.top) >= coordsAddFriends.top && parseInt(elem.style.top) <= coordsAddFriends.bottom){
            //console.log("отпустили кнопку мышки", parseInt(elem.style.left));
            elem.className = "";
            elem.style = "";
            elem.querySelector("span").className = "glyphicon glyphicon-remove";
            document.querySelector(".add-friends ul").appendChild(elem);
            document.querySelector(".add-friends").style.backgroundColor = "#fff";
        }else{
            //console.log(coordsAddFriends.left);
            /*elem.className = "";
            elem.querySelector("span").className = "glyphicon glyphicon-plus";
            document.querySelector(".all-friends ul").appendChild(elem);
            return;*/
        }
    }
});

document.addEventListener("mousemove", e => {
    if(active){
        elem.className = "selected";
        elem.style.width = width + "px";
        elem.style.backgroundColor = "#f0f0f0";
        document.body.appendChild(elem);
        document.body.style.userSelect = "none";
        elem.style.top = e.clientY - topY + "px";
        elem.style.left = e.clientX - leftX+ "px";
        
        if(parseInt(elem.style.left) >= coordsAddFriends.left && parseInt(elem.style.left) <= coordsAddFriends.right && parseInt(elem.style.top) >= coordsAddFriends.top && parseInt(elem.style.top) <= coordsAddFriends.bottom){
             document.querySelector(".add-friends").style.backgroundColor = "#f0f0f0";
        }else{
            document.querySelector(".add-friends").style.backgroundColor = "#fff";
        }
    }
});

//функция поиска по друзьям
function search (input, friendColl){
    let serchStr = '';
    serchStr = input.value.toLowerCase();
 
    for(item of friendColl){
                   //console.log(item);
        let friend = item.querySelector("h3").innerText.toLowerCase();

        if(serchStr === friend.slice(0, serchStr.length)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    }
}