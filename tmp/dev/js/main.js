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

//drag'n'drop
let active;
let elem;
let leftX;
let topY;
let width;
let addFriends = document.querySelector(".add-friends");
let coordsAddFriends = addFriends.getBoundingClientRect();
let coordsElem;

document.addEventListener("mousedown", e => {
    if(e.which != 1){
        return;
    }
    active = true;
    elem = e.target.closest("li");
    
    if(elem){
        coordsElem = elem.getBoundingClientRect();
        leftX = coordsElem.left;
        topY = coordsElem.top;
        width = coordsElem.width;
    }
    
    console.log("нажали на кнопку мышки");
});
    
document.addEventListener("mouseup", e => {
    if(e.which != 1){
        return;
    }
    active = false;
    
    if(elem){
        elem.style.backgroundColor = "#fff";
    
        if(parseInt(elem.style.left) >= coordsAddFriends.left && parseInt(elem.style.left) <= coordsAddFriends.right && parseInt(elem.style.top) >= coordsAddFriends.top && parseInt(elem.style.top) <= coordsAddFriends.bottom){
            console.log("отпустили кнопку мышки", parseInt(elem.style.left));
            elem.className = "";
            elem.style = "";
            elem.querySelector("span").className = "glyphicon glyphicon-remove";
            document.querySelector(".add-friends ul").appendChild(elem);
            document.querySelector(".add-friends").style.backgroundColor = "#fff";
        }else{
            console.log(elem);
           /*document.querySelector(".all-friends ul").appendChild(elem);
            elem.removeAttribute("class");
            elem.style = "";
            elem.querySelector("span").className = "glyphicon glyphicon-plus";*/
            
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
        elem.style.top = e.clientY + "px";
        elem.style.left = e.clientX + "px";
        
        if(parseInt(elem.style.left) >= coordsAddFriends.left && parseInt(elem.style.left) <= coordsAddFriends.right && parseInt(elem.style.top) >= coordsAddFriends.top && parseInt(elem.style.top) <= coordsAddFriends.bottom){
             document.querySelector(".add-friends").style.backgroundColor = "#f0f0f0";
        }else{
            document.querySelector(".add-friends").style.backgroundColor = "#fff";
        }
    }
});

//добавить в список друзей
document.querySelector(".all-friends ul").addEventListener("click", (e) =>{
    if(e.target.getAttribute("class") === "glyphicon glyphicon-plus"){
        console.log(e.target.getAttribute("class"));
        e.target.setAttribute("class", "glyphicon glyphicon-remove");
        let li = e.target.parentElement;
        document.querySelector(".add-friends ul").appendChild(li);
    }
});

//удалить из списка друзей
document.querySelector(".add-friends ul").addEventListener("click", (e) => {
    if(e.target.getAttribute("class") === "glyphicon glyphicon-remove"){
        e.target.setAttribute("class", "glyphicon glyphicon-plus");
        let li = e.target.parentElement;
        document.querySelector(".all-friends ul").appendChild(li);
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