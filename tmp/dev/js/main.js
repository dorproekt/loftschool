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
document.querySelector(".all-friends ul").addEventListener("click", (e) =>{
    if(e.target.getAttribute("class") === "glyphicon glyphicon-plus"){
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


